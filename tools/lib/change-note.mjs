// Public-facing change notes for the "Update history" block on every wiki page.
//
// Why this exists: build-page-changelogs.mjs used to render raw git commit
// subjects straight onto heavymetalindex.com. Commit prose is written for the
// repo, not for readers, and it carries contamination that must never reach a
// public page:
//
//   1. Certification-program references (HMTc, threshold-setting). CLAUDE.md
//      Part 12: the wiki never mentions the certification program. A history row
//      reading "HMTc product-category picker" hands a plaintiff's expert the
//      "this wiki is the certifier's own marketing" argument for free.
//   2. Design and competitor shorthand ("Examine-style", "microbiomemedicine"),
//      which reads as an outside product name on a reference page.
//   3. Toolchain and agent codenames (prebuild, FRANK, Codex, daemon), which are
//      meaningless to a regulatory-affairs reader and make the wiki look like a
//      build log rather than a reference work.
//
// Scrubbing commit prose was tried and rejected: measured against 1,387
// substantive commits, only 2% produced a subject that could be rendered to a
// public reader without mangling. The channel is structurally unusable.
//
// So descriptions are not drawn from commit prose at all. They are derived from
// what the diff did to the page — sources added or removed, sections added,
// contamination-profile values revised, narrative text rewritten. That is both
// leak-proof by construction and more useful to the audience: a regulatory
// reviewer wants to know that four sources landed and two values moved, not that
// a generator was wired into a build step. The linked commit remains the
// authoritative record.

// ---------------------------------------------------------------------------
// Terms that must never render on a public page. Nothing in the rendered blocks
// is derived from commit prose, so these lists are the audit's assertion rather
// than a filter — audit-page-history-leaks.mjs fails the build if any of them
// appears inside a generated block.
//
// Two groups, because they apply to different blocks. The firewall group applies
// everywhere. The build group applies only to update-history: agency names and
// build codenames collide (Codex Alimentarius is a food-standards body and a
// legitimate reference-list entry), and references are rendered from source-page
// frontmatter, which cannot carry toolchain prose.
// ---------------------------------------------------------------------------
export const PROGRAM_FIREWALL_TERMS = [
  // Certification-program firewall (CLAUDE.md Part 2 / Part 12)
  /\bhmt\s*&?\s*c\b/i,
  /\bheavymetal(?:tested|certified)\b/i,
  /\bthreshold[- ]setting\b/i,
  /\bstandards?[- ](?:workbench|book|briefing)\b/i,
  // Outside product / design shorthand
  /\bexamine(?:\.com)?\b/i,
  /\bmicrobiomemedicine\b/i,
  /\bwikibiome\b/i,
  // Code tokens and file paths
  /\b[\w./-]+\.(?:mjs|ts|tsx|js|jsonl?|csv|scss|yml|yaml)\b/i,
  /\btools\//i,
]

export const INTERNAL_BUILD_TERMS = [
  // Agent + orchestration codenames
  /\bfrank\b/i,
  /\bcodex\b/i,
  /\bclaude\b/i,
  /\bkimi\b/i,
  /\bcowork\b/i,
  /\bultracode\b/i,
  /\bdaemon\b/i,
  /\bautopilot\b/i,
  /\bsprint\b/i,
  // Toolchain / build plumbing
  /\bquartz\b/i,
  /\bvercel\b/i,
  /\bpre-?build\b/i,
  /\bpost-?build\b/i,
  /\bsnav\b/i,
  /\bfrontmatter\b/i,
  /\bregex\b/i,
  // Internal process vocabulary that reads as unfinished work
  /\bplaceholder\b/i,
  /\bstub\b/i,
  /\bscaffold\b/i,
  /\bbacklog\b/i,
  /\bWIP\b/i,
  /\bstranded\b/i,
  /\bquarantine\b/i,
  /\bawaiting[- ]synthesis\b/i,
  /\bautonomy\b/i,
  /\bfirewall\b/i,
  /\b\w+_\w+\b/, // snake_case identifiers (routing_unresolved, cite_key)
]

export const INTERNAL_TERMS = [...PROGRAM_FIREWALL_TERMS, ...INTERNAL_BUILD_TERMS]

export function hasInternalTerm(text) {
  const s = String(text ?? "")
  return INTERNAL_TERMS.some((re) => re.test(s))
}

// ---------------------------------------------------------------------------
// Diff accounting
//
// A page's diff is split into four channels. Only the first three represent a
// change a reader would care about at the evidence level; the fourth is wording.
// Machine-regenerated regions (marker-bounded blocks, pipe tables, bookkeeping
// frontmatter) are excluded, which is what keeps regeneration passes out of the
// history without needing to pattern-match commit subjects.
// ---------------------------------------------------------------------------

// contamination_profile fields whose movement is a published-value change.
// `last_reviewed` / `updated` are bookkeeping and deliberately excluded.
const PROFILE_FIELDS = /^\s*(typical_ppb|p95_ppb|max_ppb|min_ppb|n_studies|confidence|status|range_ppb|mean_ppb|median_ppb):/

// Prose emitted by generators inside marker blocks. It changes only when a
// generator's own wording changes, which is not a change to this page's claims.
const GENERATED_PROSE = [
  /^_?Auto-generated from/i,
  /^The (?:five|three) most recent/i,
  /^This page is (?:auto-)?regenerated/i,
  /^This page has no substantive edit history/i,
  /^This synthesis has not yet/i,
  /^_\[awaiting synthesis\]_/i,
  /peer[- ]review/i,
  /^Generated by /i,
]

export function emptyStats() {
  return {
    sourcesAdded: new Set(),
    sourcesRemoved: new Set(),
    headingsAdded: 0,
    headingsRemoved: 0,
    profileFields: new Set(),
    proseAdded: 0,
    proseRemoved: 0,
  }
}

const SOURCE_LINK = /\[\[sources\/([a-z0-9._-]+)/gi

function citeKeysIn(line) {
  const out = []
  let m
  SOURCE_LINK.lastIndex = 0
  while ((m = SOURCE_LINK.exec(line)) !== null) out.push(m[1].toLowerCase())
  return out
}

/**
 * Fold one added (`added: true`) or removed diff line into a page's stats for a
 * single commit. `line` is the diff line with its leading +/- already stripped.
 */
export function accumulate(stats, line, added) {
  const raw = line
  const trimmed = raw.trim()
  if (!trimmed) return

  // Marker comments and HTML: apparatus, never reader content.
  if (trimmed.startsWith("<!--")) return

  // Contamination-profile values are the highest-signal change on the page.
  const profile = raw.match(PROFILE_FIELDS)
  if (profile) {
    stats.profileFields.add(profile[1])
    return
  }

  // Any other `key: value` line is frontmatter bookkeeping (updated:, tags:,
  // n_sources:) rather than page content.
  if (/^\s*[a-z_]+:(?:\s|$)/.test(raw)) return

  // Pipe-table rows are generated blocks (source legend, contamination tables,
  // the update-history table itself). Citations inside them are apparatus.
  if (trimmed.startsWith("|")) return

  // Generator-authored prose inside marker blocks.
  if (GENERATED_PROSE.some((re) => re.test(trimmed))) return

  const keys = citeKeysIn(trimmed)
  for (const k of keys) (added ? stats.sourcesAdded : stats.sourcesRemoved).add(k)

  if (/^#{2,4}\s/.test(trimmed)) {
    if (added) stats.headingsAdded += 1
    else stats.headingsRemoved += 1
    return
  }

  if (added) stats.proseAdded += 1
  else stats.proseRemoved += 1
}

/** Net citation movement: keys that genuinely entered or left the page. */
function netCitations(stats) {
  const added = [...stats.sourcesAdded].filter((k) => !stats.sourcesRemoved.has(k))
  const removed = [...stats.sourcesRemoved].filter((k) => !stats.sourcesAdded.has(k))
  return { added: added.length, removed: removed.length }
}

/** True when the commit changed something a reader would care about. */
export function isSubstantive(stats) {
  const cites = netCitations(stats)
  return (
    cites.added > 0 ||
    cites.removed > 0 ||
    stats.headingsAdded > 0 ||
    stats.headingsRemoved > 0 ||
    stats.profileFields.size > 0 ||
    stats.proseAdded > 0 ||
    stats.proseRemoved > 0
  )
}

// The author's own assertion that something published was wrong is the one
// signal worth reading off the commit subject. It is used to classify, never
// rendered.
const CORRECTION_SUBJECT =
  /(^fix(\([^)]*\))?:)|(^revert\b)|\bcorrect(?:s|ed|ion)?\b|\berrat(?:a|um)\b|\bretract(?:s|ed|ion)?\b|\bmisstat|\binaccurat|\boverstat|\bunderstat/i

/**
 * major      — evidence or structure moved: sources in or out, sections added,
 *              contamination-profile values revised.
 * correction — the commit asserts a published value or statement was wrong.
 * minor      — narrative wording revised, nothing else.
 */
export function classifyChange(subject, stats) {
  if (CORRECTION_SUBJECT.test(String(subject ?? ""))) return "correction"
  const cites = netCitations(stats)
  if (
    cites.added > 0 ||
    cites.removed > 0 ||
    stats.headingsAdded > 0 ||
    stats.headingsRemoved > 0 ||
    stats.profileFields.size > 0
  ) {
    return "major"
  }
  return "minor"
}

function plural(n, singular, pluralForm) {
  return `${n} ${n === 1 ? singular : (pluralForm ?? `${singular}s`)}`
}

/**
 * Assemble the reader-facing description entirely from diff facts. Every clause
 * is a count of something that measurably changed in the page's content, so the
 * sentence cannot assert more than the diff supports.
 */
export function describeChange(stats) {
  const clauses = []
  const cites = netCitations(stats)

  if (cites.added && cites.removed) {
    clauses.push(`${plural(cites.added, "source")} added and ${cites.removed} removed`)
  } else if (cites.added) {
    clauses.push(`${plural(cites.added, "source")} added`)
  } else if (cites.removed) {
    clauses.push(`${plural(cites.removed, "source")} removed`)
  }

  if (stats.profileFields.size) {
    clauses.push("contamination-profile values revised")
  }

  if (stats.headingsAdded && stats.headingsRemoved) {
    clauses.push(`${plural(stats.headingsAdded, "section")} added and ${stats.headingsRemoved} removed`)
  } else if (stats.headingsAdded) {
    clauses.push(`${plural(stats.headingsAdded, "section")} added`)
  } else if (stats.headingsRemoved) {
    clauses.push(`${plural(stats.headingsRemoved, "section")} removed`)
  }

  if (clauses.length < 3) {
    const touched = stats.proseAdded + stats.proseRemoved
    if (touched > 0) {
      clauses.push(clauses.length ? "narrative text revised" : "Narrative text revised")
    }
  }

  if (!clauses.length) return "Page content revised"
  const sentence = clauses.join("; ")
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}
