import test from "node:test";
import assert from "node:assert/strict";
import { root } from "./generate.mjs";
import { comparisonProfiles } from "./pilot/observations.mjs";
import { buildProfile, medianBounds, summarizeSamples, quantile, timeComparison } from "./pilot/comparisons.mjs";
const profiles=comparisonProfiles(root);
const exact=(id,value,year="2020",region="West",season="Winter")=>({id,value,lower:value,upper:value,year,region,season,limit:1});

test("white rice Cd matches winter regions and balances duplicate collections",()=>{
  const c=profiles["50:Cd"].variants["::"].comparisons.time;
  assert.equal(c.reference_year,"2018");assert.equal(c.target_year,"2020");
  assert.equal(c.reference.lower,4.3);assert.equal(c.target.lower,5);
  assert.equal(c.matched_strata.length,5);assert.equal(c.reference_n,6);assert.equal(c.target_n,5);
  assert.ok(!c.matched_strata.includes("West|Winter"));
  assert.equal(c.excluded_current.length,1);assert.equal(c.excluded_reference.length,6);
  assert.ok(Math.abs(c.percent_change-16.279069767441868)<1e-9);
});
test("brown rice Cd comparison uses the same matching method and its own reference",()=>{
  const c=profiles["402:Cd"].variants["::"].comparisons.time;
  assert.equal(c.reference.lower,5.5);assert.equal(c.target.lower,9.8);
  assert.deepEqual(c.reference_middle50,{q1:4,q3:9});
  assert.equal(c.position,"Above reference middle 50%");
});
test("West time comparison uses the earlier matching winter year, not an unmatched summer",()=>{
  const c=profiles["50:Cd"].variants["West::2020"].comparisons.time;
  assert.equal(c.reference_year,"2019");assert.equal(c.reference.lower,4.5);assert.equal(c.target.lower,12);
  assert.equal(c.target_n,1);assert.equal(c.reference_n,1);assert.match(c.context,/does not establish a regional trend/);
});
test("a region compares to contemporaneous peers with disclosed sample counts",()=>{
  const c=profiles["50:Cd"].variants["West::2020"].comparisons.regions;
  assert.equal(c.target.lower,12);assert.equal(c.reference.lower,5);
  assert.equal(c.target_n,1);assert.equal(c.reference_n,5);
  assert.deepEqual(c.matched_strata,["2020|Winter"]);assert.equal(c.percent_change,140);
});
test("source coverage filters do not manufacture inorganic arsenic observations",()=>{
  const p=profiles["50:iAs"];
  assert.equal(p.samples.length,1);assert.equal(p.variants["::2020"],undefined);assert.equal(p.variants["West::"],undefined);
  const c=p.variants["::"].comparisons.time;
  assert.equal(c.direction,"composition");assert.match(c.label,/55\.5%/);
  assert.equal(p.paired_total.value,75);assert.equal(p.paired_total.id,p.samples[0].id);
});
test("non-detects produce bounds, never a zero median or a claim of no change",()=>{
  const c=profiles["50:U"].variants["::"].comparisons.time;
  assert.equal(c.direction,"bounded");assert.equal(c.reference.exact,false);assert.equal(c.target.exact,false);
  assert.match(c.detail,/≤1/);assert.equal(c.percent_change,undefined);
  assert.doesNotMatch(c.label,/unchanged|stable|Same/);
});
test("a detected median above the earlier censoring bound supports direction without a fabricated percentage",()=>{
  const c=profiles["50:Ni"].variants["::"].comparisons.time;
  assert.equal(c.reference.upper,40);assert.equal(c.reference.exact,false);assert.equal(c.target.lower,49);
  assert.equal(c.direction,"higher");assert.equal(c.percent_change,undefined);
});
test("formula comparisons preserve year counts and do not use growing maxima as trend estimates",()=>{
  const p=profiles["formula:tAs"],c=p.variants["::"].comparisons.time;
  assert.equal(c.reference_n,29);assert.equal(c.target_n,126);
  assert.equal(c.reference.lower,0.2);assert.equal(c.target.lower,0.4);assert.equal(c.percent_change,100);
  assert.match(c.context,/not a demonstrated market trend/);
  assert.equal(p.regions.length,0);assert.match(p.variants["::"].comparisons.regions.label,/unavailable/);
});
test("formula mercury keeps conservative source-wide LOD bounds for each year",()=>{
  const p=profiles["formula:tHg"];
  assert.equal(p.lod_upper,0.08);assert.equal(p.variants["::2023"].median.upper,0.08);
  assert.equal(p.variants["::2023"].detected,0);assert.equal(p.variants["::2025"].detected,2);
  assert.equal(p.variants["::"].comparisons.time.percent_change,undefined);
});
test("a first year remains a reference instead of comparing itself to itself",()=>{
  const c=profiles["50:Cd"].variants["::2018"].comparisons.time;
  assert.equal(c.direction,"reference");assert.equal(c.percent_change,undefined);
});
test("quantile intervals bound censored data without substituting observed values",()=>{
  const s=[{id:"a",value:null,lower:0,upper:4,limit:4},exact("b",2),exact("c",9)];
  assert.deepEqual(medianBounds(s),{lower:2,upper:4,exact:false});
  const summary=summarizeSamples(s);assert.equal(summary.detected,2);assert.equal(summary.min,2);assert.equal(summary.max,9);
  assert.equal(quantile([1,2,4,8],0.25),1.75);
});
test("mismatched seasons do not produce a temporal percentage",()=>{
  const p=buildProfile([exact("a",1,"2018","West","Summer"),exact("b",5,"2020","West","Winter")],{kind:"rice",analyte:"Cd",unit:"composites"});
  const c=timeComparison(p);assert.equal(c.percent_change,undefined);assert.equal(c.direction,"reference");
});
test("duplicate sample identities and reversed censoring intervals fail",()=>{
  assert.throws(()=>buildProfile([exact("a",1),exact("a",2)],{kind:"rice"}),/Duplicate/);
  assert.throws(()=>buildProfile([{...exact("a",1),lower:2,upper:1}],{kind:"rice"}),/Invalid censoring/);
});
