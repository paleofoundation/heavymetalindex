from pathlib import Path
import json,re,hashlib
b=Path('data/evidence/contracts/fish/fulltext-correction');id='bazie2022-burkina-faso-foodstuffs-metals';doc=json.load(open(b/'extractions'/f'{id}-xml-structure.json'));t=next(t for t in doc['tables'] if t['id']=='Tab2')
carry={};expanded=[]
for ri,row in enumerate(t['rows']):
 grid={i:v[0] for i,v in carry.items()};carry={i:(v[0],v[1]-1) for i,v in carry.items() if v[1]>1};c=0
 for cell in row:
  while c in grid:c+=1
  span=int(cell['colspan']);down=int(cell['rowspan'])
  for k in range(span):
   grid[c+k]=cell['text']
   if down>1:carry[c+k]=(cell['text'],down-1)
  c+=span
 expanded.append([grid.get(i,'') for i in range(max(grid)+1)])
fish=[(ri+1,row) for ri,row in enumerate(expanded) if row[0]=='Dried fish'];assert len(fish)==12
analytes=['Pb','Zn','Cd','Ni','Co','Mn','Fe','Cr','Cu'];rows=[];units=[]
for ri,r in fish:
 assert len(r)==12,r
 for ai,a in enumerate(analytes):
  value=r[ai+3];nums=[float(s) for s in re.findall(r'\d+(?:\.\d+)?',value)];stat='median' if r[2]=='Med' else 'reported_range';result_id=f'fish-bazie2022-{r[1].lower().replace(" ","-")}-{a}-{stat}';loc={'artifact':doc['artifact'],'sha256':doc['sha256'],'kind':'cell','location':f'Primary XML Table2(Tab2),Dried fish,{r[1]},{r[2]},{a};expanded source row{ri},column{ai+4};Results paragraph:parentheses are IQR'}
  med=nums[0] if stat=='median' else None;low=med if stat=='median' else 0 if 'LD' in value else nums[0];high=med if stat=='median' else nums[-1]
  rows.append({'id':result_id,'source_id':id,'family_id':'Bazie-2020-Burkina-food-survey','analyte':a,'material':'Commercial dried fish, unspecified species','form':'Dried fish as sold','origin_or_market':'Burkina Faso purchase market: '+r[1]+';harvest origin unreported','year':'2020;source gives a reversed sampling date interval(2November to3October),not silently corrected','species':'Unreported finfish species','statistic':stat,'reported':{'text':value,'value':med,'iqr_width':nums[1] if stat=='median' and len(nums)>1 else None,'unit':'mg/kg'},'basis':'Commercial dried product as analyzed;no laboratory dry-weight or moisture conversion inferred','n':45 if r[1]=='Total' else None,'n_note':'45dried-fish samples overall;per-city n not reported. Total overlaps the fivecity groups;not an extra independent sampling family.','sample_unit':'Published market subgroup summary of dried-fish samples','censoring':'Lower range endpoint is <LD with no numerical LD recovered;0 is a physical identification bound,not a measured minimum or imputed result' if 'LD' in value else 'Reported rounded summary,retained as published;no distribution reconstructed from IQR width','unit':'mg/kg','value':med,'lower_bound':low,'upper_bound':high,'locator':loc,'method':'Acid digestion 0.5g,HNO3/HCl3:1,150°C for2.5h;flameAAS externalcalibration;no metal-species or moisture conversion','extraction_status':'primary_verified_dried_fish_block_Table2','limitations':['Unknown species andper-city n;do not infer45/5 fish per city','Commercial driedfish basis must remain separate from wet/fresh muscle','Parentheses denote IQR width,not SD or quartile endpoints','Table dates reversed;no current-origin guarantee']})
  if stat=='median':units.append({'id':result_id+'-reference-unit','result_id':result_id,'family_id':'Bazie-2020-Burkina-food-survey','analyte':a,'material':'Commercial dried finfish','basis':'Commercial dried product as analyzed','value':med,'statistic':'median','locator':loc,'overlap':'Total overlapsfive city medians;exclude Total fromreference membership ifcity units are admitted' if r[1]=='Total' else 'Five non-overlapping market groups;exactwithin-city samplesnotdeposited'})
assert len(rows)==108;assert len(units)==54
out={'source_id':id,'identity_verified':True,'completeness_verified':True,'proof':{'doi':'10.1038/s41598-022-08470-z','artifact':doc['artifact'],'sha256':doc['sha256'],'completeness':'FullprimaryXMLbody,methods,results,three tables,conclusion and50references. No supplementary dataset linked. All occurrence cells for driedfish are inTable2;Table3exposure model is not additional occurrence data.'},'coverage':{'eligible_table':'Table2 driedfish12rows×9analytes','occurrence_rows':108,'reference_unit_candidates':54,'reference_overlap_exclusions_required':9,'other_materials':'Rice/maize Table1 andtomato/peanuts Table2 are non-fish and excluded by primary material identity'},'rows':rows,'reference_unit_candidates':units};(b/'extractions/bazie2022.json').write_text(json.dumps(out,indent=2)+'\n');print({'source_id':id,'rows':len(rows),'median_candidates':len(units),'note':'Referenceadmission awaitscompleteledger;not a release-ready single-familyreference'})
