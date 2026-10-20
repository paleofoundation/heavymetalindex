import fs from 'node:fs';
import path from 'node:path';
import { root } from '../generate.mjs';

export const magnitudeRecordPath = 'data/evidence/contracts/pilot-2026-10-17/mitigation-magnitude.json';
export const magnitudePolicy = JSON.parse(fs.readFileSync(path.join(root,magnitudeRecordPath),'utf8'));
export const magnitudeMethod = 'HMI editorial magnitude bands: Low is a change greater than 0% and below 25%; Moderate is 25% to below 50%; High is 50% or more, relative to that control’s own comparator. Direction is shown separately. These are descriptive display bands, not validated efficacy cutoffs, occurrence-baseline positions, statistical significance, evidence certainty, safety or net benefit. A range spanning bands retains both labels; a qualitative label has no implied percentage.';
const names={low:'Low',moderate:'Moderate',high:'High'};
export const effectDirectionLabel = direction => ({lower:'Decreased',higher:'Increased',minimal:'Minimal effect',same:'No change'}[direction] || 'Context');

export function magnitudeBand(percent) {
  if(!Number.isFinite(percent)||percent<=0)return null;
  return percent<magnitudePolicy.bands.moderate_from_percent?'low':percent<magnitudePolicy.bands.high_from_percent?'moderate':'high';
}

export function validateMagnitudeAssessments(records) {
  if(magnitudePolicy.version!==1||magnitudePolicy.method!=='hmi-relative-change-magnitude-v1')throw Error('Unknown mitigation magnitude method');
  for(const assessment of magnitudePolicy.reported_assessments) {
    const record=records.find(r=>r.id===assessment.record_id);
    if(!record)continue; // This page may use another subset of the shared records.
    const outcome=record.outcomes.find(o=>o.analyte===assessment.analyte&&o.period===assessment.period);
    if(record.source_id!==assessment.source_id||!outcome||outcome.locator!==assessment.locator||outcome.effect_label!==assessment.expected_effect_label||record.primary_url!==assessment.primary_url)
      throw Error(`Stale mitigation magnitude provenance: ${assessment.record_id}`);
    if(assessment.direction!=='minimal'&&assessment.direction!==outcome.direction)
      throw Error(`Mitigation magnitude direction mismatch: ${assessment.record_id}`);
  }
}

export function assessEffectMagnitude(outcome, recordId) {
  const reported=magnitudePolicy.reported_assessments.find(a=>a.record_id===recordId&&a.analyte===outcome.analyte&&a.period===outcome.period);
  const direction=reported?.direction || outcome.direction;
  const context={direction,display_analyte:reported?.display_analyte};
  if(reported?.qualitative_level) return {...context,level:reported.qualitative_level,label:names[reported.qualitative_level],basis:reported.basis,qualitative:true};
  let range=reported?.percent_range, basis=reported?.basis;
  if(!range&&['lower','higher','same'].includes(direction)&&Number.isFinite(outcome.start)&&outcome.start>0&&Number.isFinite(outcome.end)&&outcome.end>=0) {
    const signed=100*(outcome.end-outcome.start)/outcome.start;
    if((signed>0?'higher':signed<0?'lower':'same')!==direction)throw Error('Magnitude contradicts source direction');
    range=[Math.abs(signed),Math.abs(signed)];
    basis=`HMI calculates the relative change from the retained source means: (${outcome.end} − ${outcome.start}) / ${outcome.start} × 100 = ${signed.toFixed(1)}%. This is a descriptive contrast of means; no confidence interval or significance test is inferred.`;
  }
  if(range) {
    const [min,max]=range;
    if(!Number.isFinite(min)||!Number.isFinite(max)||min<0||max<min||(direction==='lower'&&max>100))throw Error('Invalid mitigation magnitude range');
    if(max===0)return {...context,level:null,label:'No change',basis};
    const lower=magnitudeBand(min),upper=magnitudeBand(max);
    if(!lower)return {...context,level:null,label:'Uncertain',basis:`${basis} The reported range includes no change.`};
    return {...context,level:lower===upper?lower:null,label:lower===upper?names[lower]:`${names[lower]}–${names[upper]}`,basis,percent_range:range};
  }
  return {...context,level:null,label:['lower','higher'].includes(direction)?'Not quantified':'Context',basis:'No supported numerical treatment contrast is retained for this finding. A direction, market association, source-selection strategy or guidance statement alone does not establish a percentage change.'};
}

export function magnitudeExplanation(assessment) {
  return `${assessment.label} ${effectDirectionLabel(assessment.direction).toLowerCase()}${assessment.qualitative?' (qualitative)':''}. ${assessment.basis} ${magnitudeMethod}`;
}
