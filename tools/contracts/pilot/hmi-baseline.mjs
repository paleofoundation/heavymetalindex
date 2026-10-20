import { ricePooledDefinitions } from './rice-pooled-baselines.mjs';
import { createHash } from 'node:crypto';
import { buildDescriptiveReference, descriptiveReferenceLevel } from '../../evidence/build-hmtc-aggregate-distributions.mjs';

export const baselineMethod = 'hmi-pooled-reference-v2';
const frozen = '2026-10-19';
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex').slice(0, 12);

// Ingredient-independent compilation: definitions own admission, scope and
// provenance; the maintained pooling engine owns quantiles and classification.
// UI filters only choose a target view. They never rebuild its reference.
export function applyHmiBaselines(rows, definitions, exclusionReason) {
  const references = definitions.map(definition => {
    const units = definition.referenceUnits ?? rows.flatMap(row => definition.units(row));
    const distribution = buildDescriptiveReference(units, definition.scope);
    const sensitivity = buildDescriptiveReference(units, definition.scope, { weighting: definition.sensitivity });
    const leaveOneOut = distribution.families.length > 1 ? distribution.families.map(family => ({ omitted: family, distribution: buildDescriptiveReference(units.filter(u=>u.family!==family),definition.scope) })) : [];
    return { ...definition, distribution, sensitivityDistribution: sensitivity, leaveOneOut,
      id: `${baselineMethod}:${definition.key}:${digest({ units, scope: definition.scope, method: baselineMethod })}` };
  });
  const audit = [];
  const compiled = rows.map(row => {
    const matches = references.filter(ref => ref.accepts(row));
    if (matches.length > 1) throw Error(`Ambiguous HMI reference: ${row.scope_key}`);
    const ref = matches[0];
    const reason = ref ? null : exclusionReason(row);
    const admission={ finding: row.scope_key, source: row.source, analyte: row.analyte, reference_id: ref?.id ?? null, reason };
    audit.push(admission);
    return { ...row, profile: { ...row.profile, variants: Object.fromEntries(Object.entries(row.profile.variants).map(([key, view]) => {
      const target = ref ? ref.target(row, view) : null;
      const level = ref ? descriptiveReferenceLevel(target, ref.distribution) : null;
      const alternative = ref ? descriptiveReferenceLevel(target, ref.sensitivityDistribution) : null;
      const detail = !ref ? reason : !ref.distribution.eligible
        ? `Only ${ref.distribution.n} reference unit is available; at least four are required by this descriptive display rule.`
        : !level ? 'Reporting bounds or insufficient reference spread prevent a stable Low / Moderate / High classification.'
        : 'Low is below Q1; Moderate includes Q1 through Q3; High is above Q3. Reporting bounds must give the same category throughout.';
      if(key==='::')Object.assign(admission,{level,target,reason:level?null:detail,contributes:ref?.distribution.families.includes(row.source)??false});
      const baseline = {
        method: baselineMethod, frozen, reference_id: ref?.id ?? null, level,
        contributes: ref?.distribution.families.includes(row.source)??false,
        leave_one_out: ref?.leaveOneOut.map(check=>({omitted:check.omitted,level:descriptiveReferenceLevel(target,check.distribution)}))??[],
        contributions: ref?.distribution.families.map(family=>({family,units:ref.distribution.units.filter(u=>u.family===family).length,weight:ref.distribution.units.filter(u=>u.family===family).reduce((sum,u)=>sum+u.weight,0)}))??[],
        label: ref?.label ?? 'No compatible HMI reference',
        scope: ref?.scope ?? null, target_statistic: typeof ref?.targetStatistic === 'function' ? ref.targetStatistic(row) : ref?.targetStatistic ?? row.statistic,
        distribution: ref ? summary(ref.distribution) : null,
        sensitivity: ref ? { label: ref.sensitivityLabel, level: alternative, distribution: summary(ref.sensitivityDistribution), stable: alternative === level } : null,
        methods: ref?.methods ?? '', limitations: ref?.limitations ?? '',
        sources: ref?.distribution.families ?? [],
        source_labels: Object.fromEntries((ref?.distribution.families ?? []).map(source=>[source, rows.find(r=>r.source===source)?.source_label || source])),
      };
      const comparison = { kind: 'hmi_baseline', direction: 'baseline', label: baseline.label,
        detail, context: ref?.limitations ?? reason, target, baseline };
      return [key, { ...view, comparisons: { ...view.comparisons, hmi: comparison } }];
    })) } };
  });
  return { rows: compiled, record: {
    method: baselineMethod, frozen, protocol: 'docs/contracts/hmi-baseline.md',
    references: references.map(ref => ({ id: ref.id, label: ref.label, methods: ref.methods, limitations: ref.limitations,
      distribution: ref.distribution, leave_one_out: ref.leaveOneOut, sensitivity: { label: ref.sensitivityLabel, distribution: ref.sensitivityDistribution } })),
    admission: audit,
  } };
}
function summary(d) {
  const { units, ...metadata } = d;
  return metadata;
}

const cookedSource = 'fda2022-tds-elements-fy2018-fy2020';
export function riceHmiBaselines(rows, base) {
  const definitions = [...new Set(rows.filter(r => r.source === cookedSource && r.profile.samples).map(r => r.analyte))].map(analyte => {
    const scope = { ingredient: 'rice', analyte, basis: 'Cooked prepared-food composite, µg/kg as prepared',
      statistic: 'sample concentration', market: 'United States collection markets', period: 'FY2018–FY2020' };
    const accepts = r => r.source === cookedSource && r.analyte === analyte && ['50', '402'].includes(r.food_number) && !!r.profile.samples && r.region === 'United States' && r.period === 'FY2018–FY2020' && r.basis === 'FDA TDS prepared-food composite in the stated cooked form; no moisture/basis conversion';
    return {
      key: `rice-cooked-${analyte}`, scope, accepts,
      label: `HMI cooked-rice ${analyte} reference · US FY2018–FY2020`,
      targetStatistic: 'Median of selected cooked-food composites',
      units: r => accepts(r) ? r.profile.samples.map(s => ({ ...scope, id: `${r.food_number}:${s.id}`, family: r.source,
        group: r.food_number, lower: s.lower, upper: s.upper, locator: `TDS sample CSV row ${s.source_row}`, food: r.food,
        fiscal_year: s.year, region: s.region, season: s.season })) : [],
      target: (_r, view) => view.median,
      sensitivity: 'family-group', sensitivityLabel: 'Equal rice-form weight instead of equal composite weight',
      methods: 'HMI calculates its own median and quartiles from all admitted white- and brown-rice composites across the fixed period. Each sampling family receives equal total weight; each composite within a family receives equal weight. Non-detects remain zero-to-reporting-limit intervals, never measured zeros. The selected row is summarized by its sample median, including censoring bounds. The reference includes the selected samples and stays fixed when filters change.',
      limitations: 'One historical FDA sampling family; this is not a multi-study or worldwide rice baseline. Composites are not independent brands or population-weighted market samples. White and brown rice share a prepared-food reference, but preparation moisture may differ. Uneven year, region and season coverage remains. Low / Moderate / High describes concentration position, not health risk, legal compliance, evidence certainty or a causal milling effect. Censoring bounds are not confidence intervals; sample size does not establish representativeness.',
    };
  });
  definitions.push(...ricePooledDefinitions(rows,base));
  return applyHmiBaselines(rows, definitions, r => {
    if (['below_LOQ', 'not_detected'].includes(r.statistic)) return 'The source provides no numerical reporting bound for this finding. An HMI position cannot be identified.';
    if (r.statistic === 'reported_range') return 'A range from mixed rice products supplies neither a compatible sample distribution nor a category mean for the current references.';
    if(r.source.includes('alrashdi')&&r.analyte==='tHg')return 'Table 5 mercury values include zero and low measurements with analytical dispersion of about 3 µg/kg. A quantitative reporting bound was not recovered; their apparent ranks cannot establish Low / Moderate / High.';
    if(r.source.includes('yan'))return 'Most results are non-detects and the published median is a half-LOD substitution. The actual median lies between zero and the detection limit; no compatible mercury/chromium reference currently resolves its position.';
    return `This ${r.statistic} uses ${r.basis.toLowerCase()} and a different sampling frame. No compatible pooled reference has yet been admitted for this finding. No moisture conversion or mean-to-median substitution is assumed.`;
  });
}
