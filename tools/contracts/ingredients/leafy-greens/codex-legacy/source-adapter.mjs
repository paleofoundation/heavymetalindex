// Scientific data adaptation only; the shared Rice components own public markup.
import {applyHmiBaselines} from '../../pilot/hmi-baseline.mjs';
const A='adhikari2024-leafy-vegetables-johannesburg',B='bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing',S='see2025-malaysia-leafy-vegetables-icp-oes';
const point=r=>({lower:r.value,upper:r.value,exact:true,statistic:'source-reported mean'});
const result=r=>`${r.value} ± ${r.sd} µg/kg (${r.basis}; mean ± SD)`;
function directComparison(r,rows){
 let peer;
 if(r.source===A){
  const material=r.material.startsWith('Unwashed')?'Washed roadside':r.material.startsWith('Washed roadside')?'Unwashed roadside':r.material.startsWith('Washed supermarket')?'Washed vegetable-market':'Washed supermarket';
  peer=rows.find(p=>p.source===A&&p.analyte===r.analyte&&p.material.startsWith(material));
 }else if(r.source===B&&r.value!==null){
  const material=r.material.startsWith('Lettuce')?(r.material.endsWith('Market')?'Lettuce, water-washed, Amateur farm':'Lettuce, water-washed, Market'):'Lettuce, water-washed, Market';
  peer=rows.find(p=>p.source===B&&p.analyte===r.analyte&&p.material===material);
 }else if(r.source===S&&r.analyte==='Al'){
  peer=rows.find(p=>p.source===S&&p.analyte==='Al'&&p.material.startsWith(r.material.startsWith('Spinach')?'Cabbage':'Spinach'));
 }
 if(!peer)return {kind:'source_scope',direction:'summary',label:'Direction unresolved',detail:r.source===B?'The amateur-farm cabbage results are BLD without a numerical food-basis bound; their direction relative to quantified market means cannot be resolved.':'All four vegetable types share the same reported non-detect limit for this analyte. Equal reporting limits do not establish equal concentrations or an ordering.',context:'Non-detects remain censored; no zero substitution or inferred source preference.'};
 const limitation=r.source===A?'Observational market/handling groups with the same five species-composite design; not a paired intervention or causal supplier effect. Printed aggregate means are retained despite source arithmetic inconsistencies, especially tAs, Cr and Ni.':r.source===B?'Analytical triplicates describe measurement dispersion; independent food counts per commodity/source group are unresolved. Cabbage-versus-lettuce comparisons describe named species means, not a matched source-group effect.':'Each type summarizes three weekly purchases from common sellers at one market; technical repetitions add no independent food units. Vegetable-type differences are observational.';
 return {kind:'food_form',direction:r.value<peer.value?'lower':r.value>peer.value?'higher':'same',label:`${r.material} vs ${peer.material}`,reference_form:peer.material,target:point(r),reference:point(peer),target_n:r.n,reference_n:peer.n,sample_unit:r.sampling_unit,reference_id:peer.id,
  detail:`Target: ${result(r)}; reference: ${result(peer)}. Sample units: target ${r.n??'unresolved'} ${r.sampling_unit}; reference ${peer.n??'unresolved'} ${peer.sampling_unit}. Source locators: ${r.locator}; ${peer.locator}. Both retain the same analyte, source, period and measurement basis.`,
  context:`${limitation} Higher/Lower compares printed means only; SD is not a confidence interval and no statistical significance, Low/Moderate/High position or safety conclusion follows.`};
}
function excludedHmi(r){
 if(r.source===A)return 'Dry-weight five-species market/handling summaries are distinct from fresh-weight vegetable-type means. Only three washed groups are available, unwashed material remains separate, and some printed aggregate means do not reproduce species cells; no graded reference is admitted.';
 if(r.source===B)return r.value===null?'BLD has no recoverable numerical food-basis bound; no concentration position can be resolved.':'Only two named source groups per leafy species are available, with independent food counts unresolved; no four-unit compatible vegetable-type reference is available. Direct printed-mean contrasts remain usable.';
 return 'Cd, Cr and Pb are non-detects at common analyte-specific limits in all four types. Their unknown concentrations cannot be ordered or assigned a stable reference position; zero is not imputed.';
}
export function leafyOccurrenceEvidence(findings){
 const native=findings.rows.map(r=>{
  const factor=r.reported.unit==='mg/kg'?1000:1;
  const mean=r.reported.mean===null?null:Number((r.reported.mean*factor).toPrecision(12)),sd=r.reported.sd===null?null:Number((r.reported.sd*factor).toPrecision(12));
  const finding=mean===null?r.finding.replace('<0.004 mg/kg','<4 µg/kg').replace('<0.01 mg/kg','<10 µg/kg'):`${mean} ± ${sd} µg/kg`;
  const periodKey=r.period==='Collection dates unreported'?'not-reported':r.period;
  const variant={n:r.n,region:r.region,period:r.period,comparisons:{}};
  return {...r,scope_key:r.id,source:r.source_id,food:r.material,record_type:'source_summary',region_type:'Stated sampling/collection market; growing origin is not inferred',statistic_label:r.statistic,finding_text:finding,original_result:mean===null?r.finding:`${r.reported.mean} ± ${r.reported.sd} ${r.reported.unit}`,value:mean,sd,unit:'µg/kg',display_basis:r.basis,short_basis:/Dry weight/i.test(r.basis)?'Dry-weight basis':'Fresh-weight basis',reported:{...r.reported,value:r.reported.mean},conversion:{method:factor===1000?'Mass-unit conversion only: mg/kg × 1000 = µg/kg. Source basis, statistic and censoring unchanged; no moisture conversion.':'Original µg/kg units retained. Source fresh-weight conversion retained, not recomputed.'},limitations:[r.uncertainty,r.censoring,'No independent lot-level distribution or causal supplier effect is inferred.'].join(' '),overlap:'Repeated analytes, market groups, vegetable types and laboratory replicates retain one source family; they are not new independent studies.',profile:{kind:'source_summary',regions:[r.region],years:[periodKey],variants:{'::':variant,[`${r.region}::`]:variant,[`::${periodKey}`]:variant,[`${r.region}::${periodKey}`]:variant}}};
 });
 const rows=native.map(r=>({...r,profile:{...r.profile,variants:Object.fromEntries(Object.entries(r.profile.variants).map(([k,v])=>[k,{...v,comparisons:{forms:directComparison(r,native)}}]))}}));
 const accepts=r=>r.source===S&&r.analyte==='Al'&&r.basis==='Fresh weight';
 const admitted=rows.filter(accepts);
 if(admitted.length!==4||admitted.some(r=>r.n!==3))throw Error('See aluminium reference scope changed; reassess primary evidence');
 const scope={ingredient:'leafy-greens',analyte:'Al',basis:'Fresh weight, µg/kg',statistic:'vegetable-type mean',market:'Pasar Borong Selangor, Seri Kembangan, Malaysia',period:'19 October–2 November 2022'};
 const applied=applyHmiBaselines(rows,[{key:'leafy-see-al-type-means',scope,accepts,referenceUnits:admitted.map(r=>({...scope,id:r.id,family:r.source,group:r.material,locator:r.locator,lower:r.value,upper:r.value,n:r.n})),label:'HMI aluminium reference · four Selangor vegetable-type means',targetStatistic:'Source-reported vegetable-type mean (three weekly purchases)',target:point,sensitivity:'family-group',sensitivityLabel:'Equal vegetable-type weight (one summary per type)',methods:'The maintained descriptive engine gives equal weight to four source-reported vegetable-type means: cabbage, mustard, spinach and pak choi. These are four summary units from one study, not four independent studies or twelve raw measurements. The target mean contributes to the fixed reference. No raw values are reconstructed. Q1 and Q3 describe the middle half of these means; filters do not rebuild the reference.',limitations:'One market, shared sellers, three weekly purchases per vegetable type and one laboratory washing protocol. Dependence and sampling uncertainty are not captured by a four-summary position. Low / Moderate / High describes only these sampled type means, not individual vegetables, growing regions, cultivars, broader sourcing preferences, health risk, legal compliance or certainty.'}],excludedHmi);
 return {...applied,direct:applied.rows.map(r=>({finding:r.id,source:r.source,analyte:r.analyte,comparison:r.profile.variants['::'].comparisons.forms}))};
}
export const leafyOccurrenceRows=findings=>leafyOccurrenceEvidence(findings).rows;
export const leafyOccurrenceOptions={referenceNote:false,defaultComparison:'forms',comparisonModes:[{value:'forms',label:'Named group or vegetable type (same study)'},{value:'hmi',label:'HMI baseline (scoped type means)'}],
 caption:'Source-specific leafy vegetable measurements in µg/kg. Named contrasts compare printed means within a study; dry and fresh bases remain separate. The scoped HMI option rates only four Selangor aluminium type means. Non-detects are not zero.',
 columnNotes:{'Food form':'Named edible leaf, source group and preparation; each measurement retains its source family.','Collection scope':'Collection market, period and basis. Publication dates are not collection dates; purchase market is not growing origin.',Finding:'Source mean ± SD or censored non-detect. SD is not a confidence interval. Mass units only are converted; original values remain in the drawer.',Comparison:'Higher/Lower contrasts named printed means, with numerical target/reference, sample units and locators in the drawer. The HMI option describes positions among four same-study aluminium type means; these positions do not indicate safety.',Evidence:'Original units, source locator, sample units, methods and limitations. Analytical repetitions and repeated analytes are not independent food samples or studies.'}};
