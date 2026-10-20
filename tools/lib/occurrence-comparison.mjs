// Shared occurrence presentation policy for every ingredient. This consumes
// reviewed comparisons; it never pools sources or invents a reference band.
export function comparisonLevel(c) {
  if (c?.kind === 'hmi_baseline') return c.baseline?.level ?? null;
  const q = c?.reference_middle50;
  if (!c?.target?.exact || !Number.isFinite(c.target.lower) || !q ||
      !Number.isFinite(q.q1) || !Number.isFinite(q.q3) || q.q1 >= q.q3) return null;
  return c.target.lower < q.q1 ? 'low' : c.target.lower > q.q3 ? 'high' : 'moderate';
}

function referenceLabel(c, mode) {
  if (c?.kind === 'hmi_baseline') return 'vs scoped HMI baseline';
  if (c?.rating_reference?.kind === 'category_means') return 'vs other category means';
  if (c?.reference_form) return `vs ${c.reference_form.toLowerCase()}`;
  if (c?.reference_year) return `vs FY${c.reference_year}`;
  if (mode === 'regions') return 'vs matched regions';
  return 'vs matched reference';
}

export function comparisonState(c, mode = 'time') {
  const level = comparisonLevel(c);
  const reference = referenceLabel(c, mode);
  if (level) return { kind: 'rated', level, label: { low: 'Low', moderate: 'Moderate', high: 'High' }[level], reference };
  if (c?.kind === 'hmi_baseline') return { kind: 'unavailable', level: null, label: 'Limited data', reference: 'HMI position unresolved' };
  // Direction is useful even when two summaries do not provide quartiles.
  // Keep it visually distinct from a Low / Moderate / High position rating.
  if (['higher', 'lower', 'same'].includes(c?.direction) && c.target && c.reference) {
    return { kind: 'direct', level: null, label: { higher: 'Higher', lower: 'Lower', same: 'Same summary' }[c.direction], reference };
  }
  if (c?.direction === 'bounded') return { kind: 'bounded', level: null, label: 'Limits overlap', reference: 'Direction unresolved' };
  if (c?.direction === 'composition') return { kind: 'context', level: null, label: 'Paired species', reference: 'Same-sample proportion' };
  if (c?.direction === 'spread') return { kind: 'context', level: null, label: 'Regional range', reference: 'Select a region to compare' };
  if (c?.direction === 'reference') return { kind: 'unavailable', level: null, label: 'No earlier match', reference: 'Time change unavailable' };
  if (c?.direction === 'geography') return { kind: 'unavailable', level: null, label: 'No regional match', reference: 'See collection scope' };
  return { kind: 'unavailable', level: null, label: 'No comparator', reference: mode === 'forms' ? 'No matched food form' : mode === 'regions' ? 'No matched regional data' : 'No matched time series' };
}

export function comparisonSummary(states) {
  const counts = Object.fromEntries(['rated', 'direct', 'bounded', 'context', 'unavailable'].map(kind => [kind, states.filter(s => s.kind === kind).length]));
  return [
    counts.rated && `${counts.rated} relative ${counts.rated === 1 ? 'rating' : 'ratings'}`,
    counts.direct && `${counts.direct} direct ${counts.direct === 1 ? 'comparison' : 'comparisons'}`,
    counts.bounded && `${counts.bounded} with overlapping limits`,
    counts.context && `${counts.context} context ${counts.context === 1 ? 'summary' : 'summaries'}`,
    counts.unavailable && `${counts.unavailable} with limited comparison data`,
  ].filter(Boolean).join(' · ') || 'No findings in this selection';
}
