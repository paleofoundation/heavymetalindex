// Descriptive within-dataset comparisons. The protocol is docs/contracts/relative-findings.md.
export const formulaLODMax = { tAs: 0.2, Pb: 0.1, Cd: 0.1, tHg: 0.08 };
export const formatNumber = (n) => Number.isFinite(n) ? Number(n.toPrecision(3)).toString() : "—";
export function quantile(values, p = 0.5) {
  if (!values.length) return null;
  const a = [...values].sort((x, y) => x - y), index = (a.length - 1) * p;
  return a[Math.floor(index)] + (a[Math.ceil(index)] - a[Math.floor(index)]) * (index % 1);
}
const equal = (a,b) => Math.abs(a-b) < 1e-10;
export function medianBounds(samples) {
  if (!samples.length) return null;
  const lower=quantile(samples.map(s=>s.lower)), upper=quantile(samples.map(s=>s.upper));
  return {lower,upper,exact:equal(lower,upper)};
}
export function formatMedian(b) {
  if (!b) return "No matching samples";
  if (b.exact) return formatNumber(b.lower);
  if (b.lower===0) return `≤${formatNumber(b.upper)}`;
  return `${formatNumber(b.lower)}–${formatNumber(b.upper)} (bounded)`;
}
export function summarizeSamples(samples) {
  const detected=samples.filter(s=>s.value!==null);
  const limits=samples.map(s=>s.limit).filter(Number.isFinite);
  return {
    n:samples.length, detected:detected.length, non_detect:samples.length-detected.length,
    min:detected.length?Math.min(...detected.map(s=>s.value)):null,
    max:detected.length?Math.max(...detected.map(s=>s.value)):null,
    median:medianBounds(samples),rl_min:limits.length?Math.min(...limits):null,rl_max:limits.length?Math.max(...limits):null,
  };
}
const groupBy = (samples, key) => {
  const groups=new Map();for(const sample of samples){const k=key(sample);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(sample);}return groups;
};
function balanced(groups) {
  return medianBounds(groups.map(group=>{const b=medianBounds(group);return {lower:b.lower,upper:b.upper};}));
}
function compareBounds(target, reference, meta, referenceGroups) {
  const result={...meta,target,reference,reference_middle50:null};
  if(target.exact && reference.exact && reference.lower>0) {
    const percent=(target.lower/reference.lower-1)*100;
    result.direction=equal(target.lower,reference.lower)?"same":percent>0?"higher":"lower";
    const metric=meta.metric==="sample median"?"sample median":"matched median";
    result.label=result.direction==="same"?`Same ${metric}`:`${percent>0?"↑":"↓"} ${formatNumber(Math.abs(percent))}% ${metric}`;
    result.percent_change=percent;
  } else if(target.lower>reference.upper) {
    result.direction="higher";result.label="Above earlier measurement bound";
  } else if(target.upper<reference.lower) {
    result.direction="lower";result.label="Below reference measurement bound";
  } else {
    result.direction="bounded";result.label="Reporting bounds overlap";
    if(target.lower===0 && reference.lower===0)result.label="Both medians below reporting bounds";
  }
  result.detail=`${formatMedian(reference)} → ${formatMedian(target)} µg/kg`;
  const exact=referenceGroups.map(g=>medianBounds(g));
  if(exact.length>=4 && exact.every(b=>b.exact) && target.exact) {
    const q1=quantile(exact.map(b=>b.lower),0.25),q3=quantile(exact.map(b=>b.lower),0.75);
    result.reference_middle50={q1,q3};
    result.position=target.lower>q3?"Above reference middle 50%":target.lower<q1?"Below reference middle 50%":"Within reference middle 50%";
  }
  return result;
}
function singleYearContext(profile, samples, year) {
  if(profile.analyte==="iAs" && samples.length===1 && profile.paired_total) {
    const s=samples[0],paired=profile.paired_total;
    if(s.id===paired.id && s.value!==null && paired.value>0) return {
      direction:"composition",label:`${formatNumber(s.value/paired.value*100)}% of paired total arsenic`,
      detail:`${formatNumber(s.value)} iAs / ${formatNumber(paired.value)} tAs µg/kg`,
      context:`One Southwest composite, FY${year}. No earlier iAs measurement in this dataset; the paired ratio describes composition, not time change.`,
      metric:"paired-species composition",target_n:1,reference_n:1,
    };
  }
  return {direction:"reference",label:"First comparable collection year",detail:`FY${year} · ${samples.length} ${profile.unit}`,context:"This is the starting reference in this dataset. Choose Other collection regions to inspect contemporaneous differences.",metric:"reference period"};
}
export function timeComparison(profile, region="", year="") {
  const scoped=profile.samples.filter(s=>!region||s.region===region);
  const years=[...new Set(scoped.map(s=>s.year))].sort();
  const currentYear=year||years.at(-1), current=scoped.filter(s=>s.year===currentYear);
  if(!current.length)return null;
  for(const previousYear of years.filter(y=>y<currentYear)) {
    const previous=scoped.filter(s=>s.year===previousYear);
    const key=profile.kind==="formula"?()=>"all":s=>`${s.region}|${s.season}`;
    const before=groupBy(previous,key),after=groupBy(current,key);
    const matched=[...after.keys()].filter(k=>before.has(k));
    if(!matched.length)continue;
    const previousGroups=matched.map(k=>before.get(k)),currentGroups=matched.map(k=>after.get(k));
    const target_n=currentGroups.flat().length,reference_n=previousGroups.flat().length;
    const seasons=[...new Set(currentGroups.flat().map(s=>s.season))];
    const result=compareBounds(balanced(currentGroups),balanced(previousGroups),{
      metric:profile.kind==="formula"?"sample median":"median of matched region × season medians",
      reference_year:previousYear,target_year:currentYear,target_n,reference_n,matched_strata:matched,
      excluded_current:current.filter(s=>!matched.includes(key(s))).map(s=>s.id),
      excluded_reference:previous.filter(s=>!matched.includes(key(s))).map(s=>s.id),
      context:profile.kind==="formula"
        ? `FY${previousYear} → FY${currentYear}; n=${reference_n} → ${target_n}. Different sampled products and counts; this is a sample comparison, not a demonstrated market trend.`
        : `FY${previousYear} → FY${currentYear}; ${seasons.join(" / ")} matched; ${matched.length} matched groups; ${reference_n} → ${target_n} composites. Descriptive collection comparison.`,
    },previousGroups);
    if(profile.kind!=="formula" && matched.length===1 && target_n===1 && reference_n===1)result.context+=" One composite per period; this pair does not establish a regional trend.";
    return result;
  }
  const result=singleYearContext(profile,current,currentYear);
  if(result.direction==="reference" && years.some(y=>y<currentYear)) {
    result.label="No earlier matched collection";
    result.context="Earlier observations exist, but none shares this selected region and season. The current result cannot identify a time change against those observations.";
  }
  return result;
}
export function regionalComparison(profile, region="", year="") {
  if(profile.kind==="formula") return {direction:"geography",label:"Regional labels unavailable",detail:"FDA's formula table identifies fiscal year, not collection region.",context:"Use Earlier matched collections to compare the reported survey-year sample sets.",metric:"geography availability"};
  const available=profile.samples.filter(s=>!year||s.year===year);
  if(!region) {
    const latest=year||[...new Set(available.map(s=>s.year))].sort().at(-1);
    const latestSamples=available.filter(s=>s.year===latest);
    // A single common season avoids labelling season composition as a region effect.
    const season=[...new Set(latestSamples.map(s=>s.season))].sort().map(name=>({name,regions:new Set(latestSamples.filter(s=>s.season===name).map(s=>s.region)).size})).sort((a,b)=>b.regions-a.regions||a.name.localeCompare(b.name))[0]?.name;
    const groups=[...groupBy(latestSamples.filter(s=>s.season===season),s=>s.region)];
    const bounds=groups.map(([name,g])=>({name,b:medianBounds(g),n:g.length}));
    if(bounds.length<2)return {direction:"geography",label:"One sampled region",detail:`${bounds[0]?.name||"No region"} · FY${latest}`,context:"This subset contains no contemporaneous second region for comparison.",metric:"regional coverage"};
    const lower=Math.min(...bounds.map(g=>g.b.lower)),upper=Math.max(...bounds.map(g=>g.b.upper));
    return {direction:"spread",label:lower===0?`Regional medians ≤${formatNumber(upper)} µg/kg`:`${formatNumber(lower)}–${formatNumber(upper)} µg/kg regional median bounds`,detail:`${bounds.length} regions · FY${latest} ${season}`,context:"Choose a region to compare it with peers from the same year and season. Bounds preserve non-detects; differences are between sampled composites.",metric:"regional spread",regions:bounds};
  }
  const selected=available.filter(s=>s.region===region), peers=available.filter(s=>s.region!==region);
  const own=groupBy(selected,s=>`${s.year}|${s.season}`),other=groupBy(peers,s=>`${s.year}|${s.season}`);
  const matched=[...own.keys()].filter(k=>other.has(k));
  if(!matched.length)return {direction:"geography",label:"No matching peer collection",detail:`${region} · ${year?`FY${year}`:"all source years"}`,context:"No other-region composite shares this subset's year and season in the dataset.",metric:"regional coverage"};
  const selectedGroups=matched.map(k=>own.get(k));
  const otherGroups=matched.map(k=>{
    const groups=[...groupBy(other.get(k),s=>s.region).values()];
    const b=balanced(groups);return [{lower:b.lower,upper:b.upper}];
  });
  const target_n=selectedGroups.flat().length,reference_n=matched.flatMap(k=>other.get(k)).length;
  const result=compareBounds(balanced(selectedGroups),balanced(otherGroups),{
    metric:"median of matched year × season medians; peers balanced by region",target_n,reference_n,matched_strata:matched,
    context:`${region} versus other sampled regions; ${matched.length} matched year/season ${matched.length===1?"group":"groups"}; ${target_n} selected versus ${reference_n} peer composites. Collection location is not growing origin.`,
  },otherGroups);
  if(result.direction==="higher")result.label=result.label.replace("earlier","peer");
  return result;
}
export function buildProfile(samples, options) {
  const seen=new Set();for(const s of samples){if(seen.has(s.id))throw Error("Duplicate sample in comparison profile");seen.add(s.id);if(!Number.isFinite(s.lower)||!Number.isFinite(s.upper)||s.lower<0||s.lower>s.upper)throw Error("Invalid censoring bounds");}
  const profile={...options,samples};
  const regions=options.kind==="formula"?[]:[...new Set(samples.map(s=>s.region))].sort();
  const years=[...new Set(samples.map(s=>s.year))].sort();
  profile.regions=regions;profile.years=years;profile.variants={};
  for(const region of ["",...regions])for(const year of ["",...years]) {
    const selected=samples.filter(s=>(!region||s.region===region)&&(!year||s.year===year));
    if(!selected.length)continue;
    profile.variants[`${region}::${year}`]={
      ...summarizeSamples(selected),region:region||"United States",period:year?`FY${year}`:years.length===1?`FY${years[0]}`:`FY${years[0]}–FY${years.at(-1)}`,
      comparisons:{time:timeComparison(profile,region,year),regions:regionalComparison(profile,region,year)},
      selected_ids:selected.map(s=>s.id),
    };
  }
  profile.timeline=years.map(year=>({year,...summarizeSamples(samples.filter(s=>s.year===year))}));
  profile.regional=regions.map(region=>({region,...summarizeSamples(samples.filter(s=>s.region===region))}));
  return profile;
}

// Descriptive cooked-food comparison, matched by collection, not a milling effect.
export function riceFormComparison(targetProfile, referenceProfile, {region='',year='',targetForm,referenceForm}={}) {
  const base={kind:'food_form',metric:'median of matched collection-group medians',target_form:targetForm,reference_form:referenceForm};
  if(!referenceProfile || targetProfile.analyte!==referenceProfile.analyte)
    return {...base,direction:'unavailable',label:'No matching rice-type result',detail:'The other rice type was not measured for this analyte.',context:'No value or species is inferred from another analyte or source.'};
  if(targetProfile.kind!=='rice'||referenceProfile.kind!=='rice'||!targetProfile.source_id||targetProfile.source_id!==referenceProfile.source_id||!targetProfile.basis||targetProfile.basis!==referenceProfile.basis)
    return {...base,direction:'unavailable',label:'Incompatible rice-type evidence',detail:'A comparison requires one source and a matching preparation basis.',context:'Different studies or preparation bases are not combined into a rice-type comparison.'};
  const select=p=>p.samples.filter(s=>(!region||s.region===region)&&(!year||s.year===year));
  const key=s=>`${s.year}|${s.region}|${s.season}`;
  const own=groupBy(select(targetProfile),key),other=groupBy(select(referenceProfile),key);
  const matched=[...own.keys()].filter(k=>other.has(k));
  if(!matched.length)return {...base,direction:'unavailable',label:'No matched rice-type collection',detail:'No shared year, region and season in this selection.',context:'Unlike collection groups are not compared.'};
  const targets=matched.map(k=>own.get(k)),references=matched.map(k=>other.get(k));
  const result=compareBounds(balanced(targets),balanced(references),{
    ...base,target_n:targets.flat().length,reference_n:references.flat().length,matched_strata:matched,
    excluded_target:select(targetProfile).filter(s=>!matched.includes(key(s))).map(s=>s.id),
    excluded_reference:select(referenceProfile).filter(s=>!matched.includes(key(s))).map(s=>s.id),
    context:`Cooked ${targetForm.toLowerCase()} versus cooked ${referenceForm.toLowerCase()}; ${matched.length} shared year/region/season groups, each group equally weighted. Different food composites, not paired grains or a milling intervention. Moisture and preparation can differ. Reporting limits remain bounds; no population or safety ranking.`,
  },references);
  result.label={higher:`Higher than ${referenceForm.toLowerCase()}`,lower:`Lower than ${referenceForm.toLowerCase()}`,same:'Same sampled median',bounded:'Reporting bounds overlap'}[result.direction];
  result.detail=`Matched medians: ${targetForm} ${formatMedian(result.target)}; ${referenceForm} ${formatMedian(result.reference)} µg/kg`;
  result.reference_source_rows=references.flat().map(s=>s.source_row);
  result.target_source_rows=targets.flat().map(s=>s.source_row);
  result.rating_reference={kind:'matched_collection_medians',label:`${referenceForm} matched collection-group medians`,n:references.length,statistic:'collection-group median',weighting:'Each matched collection group weighted once'};
  delete result.percent_change;
  return result;
}

export function reportedFormComparison(target, reference, {targetForm,referenceForm,design}={}) {
  if(!reference || target.source!==reference.source || target.analyte!==reference.analyte || target.statistic!==reference.statistic || target.basis!==reference.basis || (target.n!==reference.n && design?.kind!=='unpaired_categories') || !['mean','median'].includes(target.statistic) || !Number.isFinite(target.value) || !Number.isFinite(reference.value))
    return {kind:'food_form',direction:'unavailable',label:'No comparable rice-type summary',detail:'Compatible same-study summaries are required.',context:'No cross-study or species conversion is inferred.'};
  const direction=equal(target.value,reference.value)?'same':target.value>reference.value?'higher':'lower';
  return {kind:'food_form',direction,metric:`reported ${target.statistic}`,target_form:targetForm,reference_form:referenceForm,
    label:direction==='same'?`Same rounded ${target.statistic}`:`${direction==='higher'?'Higher':'Lower'} than ${referenceForm.toLowerCase()}`,
    detail:`${targetForm} ${target.statistic}: ${formatNumber(target.value)}; ${referenceForm} ${reference.statistic}: ${formatNumber(reference.value)} µg/kg`,
    target:{lower:target.value,upper:target.value,exact:true},reference:{lower:reference.value,upper:reference.value,exact:true},target_n:target.n,reference_n:reference.n,sample_unit:target.sampling_unit,
    context:design?.context || `Same-plant brown and white grain from ${target.n} genotypes in one field study; source-reported rounded ${target.statistic}s. No individual paired differences, uncertainty for the contrast or statistical significance are inferred. Equal rounded means do not establish equivalence.`,
  };
}


// Category-position index; these are reported means, not reconstructed samples.
// The named pairwise contrast remains separate from this leave-target-out band.
export function categoryMeanReference(target, rows) {
  if(target.comparison_design?.kind!=='unpaired_categories' || target.statistic!=='mean' || !Number.isFinite(target.value))return null;
  const peers=rows.filter(r=>r.food!==target.food && r.source===target.source && r.analyte===target.analyte && r.basis===target.basis && r.unit===target.unit && r.statistic===target.statistic && r.comparison_design?.kind==='unpaired_categories' && Number.isFinite(r.value));
  if(peers.length<4 || new Set(peers.map(r=>r.food)).size!==peers.length)return null;
  const q1=quantile(peers.map(r=>r.value),0.25),q3=quantile(peers.map(r=>r.value),0.75);
  if(q1>=q3)return null;
  return {reference_middle50:{q1,q3},rating_reference:{kind:'category_means',label:`Other ${peers.length} same-survey rice-category means`,n:peers.length,statistic:'reported category mean',weighting:'Each category weighted once; target excluded; not weighted by category sample count',members:peers.map(r=>({food:r.food,value:r.value,n:r.n}))}};
}
