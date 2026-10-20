import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDescriptiveReference } from '../../evidence/build-hmtc-aggregate-distributions.mjs';
export const riceBaselineDataPath='data/evidence/contracts/pilot-2026-10-17/rice-depth/baseline-primary-data.json';
const defaultRoot=fileURLToPath(new URL('../../../',import.meta.url));
const ids={fda:'fda2013-ias-rice-products-sampling',carey:'carey2020-global-low-ias-rice-sourcing',shi:'shi2020-rice-grain-cadmium-global-supply-chain',myat:'myatsoe2023-myanmar-rice-metals',saudi:'alrashdi2024-rice-ias-cd-pb-hg-saudi-arabia',tran:'tran2024-arsenic-cadmium-vietnamese-rice-qtl',song:'song2017-china-dietary-cadmium-exposure',hao:'hao2022-probabilistic-risk-rice-mining-county',yan:'yan2025-rice-heavy-metals-henan-china'};
const common='HMI calculates a pooled distribution of subgroup medians across the admitted sampling families. Each family has equal total weight, then each country, township or rice category within that family has equal weight. This estimates the position of a typical source subgroup, not the median of every individual rice sample worldwide. Raw measurements first supply subgroup medians; published subgroup medians remain summary units. Study means, maxima and ranges are never inserted as individual samples. The rating evaluates the row’s displayed source mean or median against the pooled subgroup-median distribution; a mean is not relabelled as a median, and skewed distributions can give different positions for these statistics. The same frozen reference is used for every eligible finding and does not change with filters.';
const limits='The collection is historical and geographically uneven, with small numbers of sampling families. Country, township and category subgroups have different sampling frames. It is an evidence-library reference, not a probability sample of the world market. Source analytical and rounding uncertainty remains; censoring bounds are not confidence intervals. The selected finding can contribute to its reference. Low / Moderate / High describes concentration position, not health risk, compliance, certainty or a causal rice-form effect.';
const scratch={ingredient:'rice',analyte:'temporary',basis:'native extracted basis',statistic:'sample concentration',market:'within source',period:'source collection'};
function median(records){
 if(!records.length)throw Error('Missing target observations');
 const scope={...scratch,analyte:records[0].analyte};
 return buildDescriptiveReference(records.map(r=>({...scope,id:r.id,family:r.source,group:r.group,locator:r.locator,lower:r.lower,upper:r.upper})),scope).median;
}
const scaled=(b,lo,hi=lo)=>({lower:b.lower*lo,upper:b.upper*hi,exact:b.exact&&lo===hi});
export function ricePooledDefinitions(rows,base=defaultRoot){
 const data=JSON.parse(fs.readFileSync(path.join(base,riceBaselineDataPath),'utf8'));
 const all=data.records;
 const expectedBasis={
  [ids.fda]:'FDA 45 g dry-weight rice serving; rounded average converted to µg/kg dry weight',
  [ids.carey]:'Freeze-dried grain',[ids.shi]:'Freeze-dried grain',[ids.myat]:'Dry grain',
  [ids.saudi]:'Ground uncooked grain; moisture basis unspecified',[ids.tran]:'Air-dried grain; moisture correction unspecified',
  [ids.song]:'Fresh weight, as reported',[ids.hao]:'Brown rice dried to <13% moisture',[ids.yan]:'Rice grain; moisture basis unspecified'
 };
 for(const r of rows.filter(r=>expectedBasis[r.source]))if(r.basis!==expectedBasis[r.source])throw Error(`Reassess changed HMI basis: ${r.scope_key}`);
 const select=(source,a)=>all.filter(r=>r.source===source&&r.analyte===a);
 // A common subgroup-median layer permits synthesis without pretending a
 // country summary is a rice measurement. All subgroup medians use this engine.
 function unitsFor(source,a,scope,convert=false){
  const selected=select(source,a);
  if(!selected.length)throw Error(`Missing recovered reference: ${source} ${a}`);
  return [...new Set(selected.map(r=>r.group))].map(group=>{
   const members=selected.filter(r=>r.group===group);
   const published=members[0].kind==='group_median';
   if(published&&members.length!==1)throw Error('Duplicate summary subgroup');
   const m=published?members[0]:median(members);
   const value=convert?scaled(m,.93,.94):m;
   return {...scope,id:group,family:source,group,lower:value.lower,upper:value.upper,n:published?m.n:members.length,
    locator:published?m.locator:`Median of ${members.length} recovered values; ${members[0].locator} through ${members.at(-1).locator}`,
    evidence_kind:published?'reported subgroup median':'HMI-calculated subgroup median',
    member_ids:members.map(r=>r.id),conversion:convert?'Dry concentration ×0.93 to ×0.94; source measured 6–7% moisture loss':'No moisture conversion',
    original_basis:members[0].conversion};
  });
 }
 function target(row,convert=false){
  // Rate the statistic actually shown in the row. Recovered observations inform
  // reference medians; they do not silently replace published means.
  if(row.statistic==='mean'){
   const value={lower:row.value,upper:row.value,exact:true};
   return convert?scaled(value,.93,.94):value;
  }
  let rs=select(row.source,row.analyte);
  if(row.source===ids.fda){
   const names={'Basmati':'Basmati','Brown rice':'Brown','Instant rice':'Instant','Jasmine':'Jasmine','Parboiled rice':'Parboiled','White long grain':'White, long grain','White medium grain':'White, medium grain','White short grain':'White, short grain'};
   rs=rs.filter(r=>r.group===names[row.food]);
   if(!rs.length)throw Error(`FDA category not reconciled: ${row.food}`);
  } else if(row.source===ids.saudi) rs=rs.filter(r=>r.subset===(row.food.startsWith('Imported')?'imported':'local'));
  else if(row.source===ids.tran)rs=rs.filter(r=>r.group===(row.food==='Brown rice'?'BR':'WR'));
  let value;
  if(rs.length&&rs[0].kind!=='group_median')value=median(rs);
  else if(row.source===ids.yan)value={lower:0,upper:row.value*2,exact:false};
  else value={lower:row.value,upper:row.value,exact:true};
  return convert?scaled(value,.93,.94):value;
 }
 function make(a,basis,families,accepted,{convertMyat=false,note='',targetNote='',targetOverride}={}){
  const scope={ingredient:'rice',analyte:a,basis,statistic:'subgroup median concentration',market:'Historical international rice evidence library; admitted markets and farm surveys',period:'Fixed evidence selection through 2026-10-19; collection years vary and may be unreported'};
  const referenceUnits=families.flatMap(s=>unitsFor(s,a,scope,convertMyat&&s===ids.myat));
  return {key:`rice-pooled-${convertMyat?'native':'dry'}-${a}`,scope,referenceUnits,accepts:r=>r.analyte===a&&accepted.includes(r.source),
   label:`HMI ${basis.startsWith('Dry')?'dry-grain':'uncooked-grain'} ${a} ${families.length>1?'pooled':'single-family'} reference`,
   targetStatistic:r=>r.source===ids.yan?'Median bounded by zero and LOD; source half-LOD value is not a detection':`Source-reported ${r.statistic}${convertMyat&&r.source===ids.myat?' ×0.93–0.94 (measured moisture-loss conversion)':r.source===ids.hao?targetNote:''}`,
   target:r=>targetOverride?.(r)??target(r,convertMyat&&r.source===ids.myat),
   sensitivity:'reported-n',sensitivityLabel:'Keep equal family weights; weight subgroup medians by subgroup sample counts',
   methods:common+' '+note,
   limitations:limits+' '+(families.length===1?'Only one family is currently available for this analyte/basis; it is not a multi-study pool. ':'')+([ids.carey,ids.shi].some(s=>families.includes(s))?'Published subgroup counts do not sum to article totals (Carey 1,093 versus 1,180; Shi 2,277 versus 2,270). Counts are not used for primary weights; the count-weighted sensitivity inherits this discrepancy. ':'')+(families.includes(ids.fda)?'FDA trace estimates retain analytical uncertainty; non-speciated species are bounded by total arsenic. ':'')
  };
 }
 const defs=[];
 const dry='Dry-weight grain, µg/kg dry weight';
 defs.push(make('tAs',dry,[ids.fda,ids.myat],[ids.myat,ids.hao],{targetNote:'; Hao adjusted to dry mass using its reported <13% moisture bound',targetOverride:r=>r.source===ids.hao?{lower:r.value,upper:r.value/.87,exact:false}:null,note:'FDA rice categories and Myanmar townships share an explicitly dry-weight grain basis. They are pooled to describe central concentrations across ordinary market and farm evidence, with equal family weights. Hao’s mining-area mean is evaluated against this reference but does not set it; conversion to dry mass is bounded by the reported 0–13% residual moisture.'}));
 defs.push(make('iAs',dry,[ids.fda,ids.carey],[ids.fda,ids.carey,ids.hao],{targetNote:'; Hao adjusted using its <13% moisture bound',targetOverride:r=>r.source===ids.hao?{lower:r.value,upper:r.value/.87,exact:false}:null,note:'FDA category medians are calculated from its full analytical rice table; Carey’s regional medians supply a separate family. Dry-weight and freeze-dried grain are admitted on dry mass, retaining preparation differences. The Carey atmospheric column is excluded. Hao’s mining-area mean is an external target with a bounded 0–13% residual-moisture conversion; it does not set the reference.'}));
 defs.push(make('DMA',dry,[ids.fda,ids.carey],[ids.carey],{note:'FDA category medians and Carey regional medians are pooled as two families on a dry-grain basis. Total and inorganic arsenic are excluded from this DMA reference. Carey medians at or below 3 are bounded 0–3 because the abstract and methods differ on the reporting limit.'}));
 defs.push(make('Cd',dry,[ids.myat,ids.shi],[ids.myat,ids.shi,ids.hao],{targetNote:'; Hao adjusted using its <13% moisture bound',targetOverride:r=>r.source===ids.hao?{lower:r.value,upper:r.value/.87,exact:false}:null,note:'Myanmar township medians and Shi country medians share dry-grain concentration units. Shi’s compilation is one family; its component publications are not added again. Half-LOD country medians are bounded 0–9.8 µg/kg. The inconsistent Mauritius Q1 is not used. Hao’s targeted mining-area mean is a comparison target, not a reference member.'}));
 const native='Uncooked grain at native moisture, µg/kg grain';
 for(const a of ['tAs','Cd','Pb'])defs.push(make(a,native,[ids.myat,ids.saudi],[ids.saudi,...(a==='Pb'?[ids.myat,ids.yan]:[]),...(a==='Cd'?[ids.song,ids.yan]:[]),ids.tran],{convertMyat:true,note:'Myanmar dry-weight observations are converted to original grain mass with the study’s measured 6–7% moisture loss (×0.93–0.94); Saudi ground-grain measurements retain their analysed mass. No generic moisture assumption is applied. These ordinary farm/market sampling frames form a historical international occurrence reference. Saudi subgroups retain reported origin; triplicate laboratory analyses count once per rice sample. Song’s fresh-weight mean and Tran’s air-dried genotype estimates are external comparisons at native grain moisture; they do not set the reference. Residual moisture and experimental field selection limit those comparisons. Yan’s censored median is 0–LOD, not its published half-LOD point.'}));
 // iAs at native moisture has one recovered family. Keep that limitation visible;
 // never relabel it as a multi-study dry-weight pool.
 defs.push(make('iAs',native,[ids.saudi],[ids.saudi],{convertMyat:true,note:'Saudi sample medians are grouped by reported origin. This native-moisture layer stays separate from dry-weight iAs; no moisture percentage was reported for these samples.'}));
 for(const a of ['Ni','Cr'])defs.push(make(a,dry,[ids.myat],[ids.myat],{note:'Myanmar township medians are calculated from S3 samples. Missing unconfirmed analyses are excluded. Values below quantitation remain bounded; five township summaries represent one sampling family.'}));
 return defs;
}
