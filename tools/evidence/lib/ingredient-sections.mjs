// Role-based ingredient section matcher.
//
// This is the single source of truth for the role-based H2 matcher that backs
// data/evidence/ingredient-mandatory-sections-audit.csv. It is matched by ROLE
// (multiple acceptable phrasings per section), never by exact-string heading —
// rice's actual heading "Why this commodity accumulates cadmium" only passes by
// role. The mandatory-sections audit and the completeness scorecard both import
// from here so the two can never silently disagree about whether a section
// exists.

export const MANDATORY_SECTIONS = [
  {
    key: "why_accumulates",
    patterns: [
      /^##\s+Why this commodity accumulates/im,
      /^##\s+Why .* accumulate/im,
      /^##\s+Accumulation mechanism/im,
    ],
  },
  {
    key: "contamination_profile_table",
    patterns: [
      /^##\s+Heavy metal contamination profile/im,
      /^##\s+Contamination profile/im,
      /^##\s+Concentration ranges per metal/im,
    ],
  },
  {
    key: "ranges_by_source",
    patterns: [
      /^##\s+Ranges by source/im,
      /^##\s+Ranges by region/im,
      /^##\s+Concentration ranges/im,
      /^##\s+Geographic and varietal variation/im,
    ],
  },
  {
    key: "processing_effects",
    patterns: [
      /^#{2,3}\s+Processing effects/im,
      /^##\s+Effects of processing/im,
      /^##\s+Processing/im,
    ],
  },
  {
    key: "ingredient_derivative_risk",
    patterns: [
      /^##\s+Ingredient-derivative risk/im,
      /^##\s+Derivative risk/im,
      /^#{2,3}\s+Derivatives and concentrates/im,
    ],
  },
  {
    key: "mitigation_options",
    patterns: [
      /^##\s+Mitigation options/im,
      /^##\s+Mitigation/im,
      /^##\s+Remediation/im,
      /^##\s+Reducing contamination/im,
      /^##\s+How to reduce/im,
    ],
  },
  {
    key: "regulatory_limits",
    patterns: [
      /^##\s+Regulatory limits/im,
      /^##\s+Applicable regulations/im,
      /^##\s+Regulatory framework/im,
    ],
  },
  {
    key: "sources",
    patterns: [/^##\s+Sources\s*$/im],
  },
]

const SECTION_BY_KEY = new Map(MANDATORY_SECTIONS.map((s) => [s.key, s]))

// True if a section playing this role is present anywhere in the content.
export function sectionPresent(content, key) {
  const section = SECTION_BY_KEY.get(key)
  if (!section) return false
  return section.patterns.some((re) => re.test(content))
}

// Returns the body text of the section playing this role, bounded by the
// matched H2 heading line and the next H2 (or end of file). Returns null if the
// section is absent. Used to test non-emptiness and to scope within-section
// regex checks (cited levers, regulation links) so a link three sections away
// does not satisfy a section it is not in.
export function sectionBody(content, key) {
  const section = SECTION_BY_KEY.get(key)
  if (!section) return null
  let earliest = -1
  for (const re of section.patterns) {
    const m = content.match(re)
    if (m && (earliest === -1 || m.index < earliest)) earliest = m.index
  }
  if (earliest === -1) return null
  // advance to end of the heading line
  const afterHeadingNl = content.indexOf("\n", earliest)
  const start = afterHeadingNl === -1 ? content.length : afterHeadingNl + 1
  // next H2 heading after this one
  const rest = content.slice(start)
  const nextH2 = rest.search(/^##\s+/m)
  const body = nextH2 === -1 ? rest : rest.slice(0, nextH2)
  return body
}

// A section counts as "non-empty" when its body contains real prose or a table
// row beyond a bare pending-placeholder. Placeholder bodies inserted by the
// mandatory-sections autofill begin with "_Pending" and carry no cited evidence.
export function sectionNonEmpty(content, key) {
  const body = sectionBody(content, key)
  if (body === null) return false
  const stripped = body.trim()
  if (stripped.length === 0) return false
  // Treat a body that is ONLY a pending placeholder as empty.
  const withoutPlaceholders = stripped
    .replace(/_Pending[^\n]*_/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim()
  return withoutPlaceholders.length > 0
}
