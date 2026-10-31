import pathlib,json,hashlib,datetime,collections,re
import openpyxl
b=pathlib.Path('data/evidence/contracts/leafy-greens');p=b/'retrieval/kim2024-s001.xlsx';digest=hashlib.sha256(p.read_bytes()).hexdigest();w=openpyxl.load_workbook(p,read_only=True,data_only=True);records=[];source='kim2024-metals-kale-urban-rural-maryland'
codes={'Calcium':'Ca','Copper':'Cu','Iron':'Fe','Magnesium':'Mg','Manganese':'Mn','Molybdenum':'Mo','Phosphorous':'P','Potassium':'K','Sodium':'Na','Zinc':'Zn','Arsenic':'tAs','Barium':'Ba','Cadmium':'Cd','Chromium':'Cr','Chromium(total)':'Cr','Lead':'Pb','Nickel':'Ni','Uranium':'U','Vanadium':'V'}
def factor(unit):return 10000 if unit.startswith('mg/100g') else 1000 if unit.startswith('ppm') else 1 if unit.startswith('ppb') else None
def loc(sheet,row,cell):return {'artifact':str(p),'sha256':digest,'kind':'cell','location':f'{sheet}!{cell}{row}'}
def common(code,unit,location,stat,n,note):return {'source_id':source,'family_id':'kim-darkibor-maryland-2019','analyte':code,'material':'Darkibor kale, washed edible leaves without central ribs','species':'Brassica oleracea, Darkibor cultivar','form':'raw, deionized-water washed, ribs removed; field or market composite retained','basis':'Fresh weight' if 'fresh' in unit else 'Dry weight, source conversion using individually measured moisture','unit_original':unit,'unit':'µg/kg','conversion_factor':factor(unit),'statistic':stat,'n':n,'n_note':note,'sample_unit':'three-plant/three-bunch composites; clustered within six farms','origin_or_market':'Baltimore City urban farms and four rural farms within one-hour drive, Maryland, USA','year':'11–18 October2019 harvest and collection','locator':location}
raw=[];s=w['Table S2'];headers=[c.value for c in next(s.iter_rows(min_row=3,max_row=3))];ordinal=collections.Counter();lookup={}
for n,row in enumerate(s.iter_rows(min_row=4,values_only=True),4):
 if not row[0]:continue
 r=dict(zip(headers,row));raw.append({'row':n,**r})
 if r['attribute_group'] not in ['nutritional_element','non_essential_metal']:continue
 a=r['attribute'];unit=r['unit'];code=codes[a];v=float(r['result']);k=(r['site_id'],r['sampling_location'],a,'fresh' if 'fresh' in unit else 'dry');ordinal[k]+=1;order=ordinal[k];key=(r['site_id'],r['sampling_location'],a,order,'fresh' if 'fresh' in unit else 'dry');lookup[key]={'value':v,'flag':r['below_detection_limit'],'unit':unit,'row':n}
 record={**common(code,unit,loc('Table S2',n,'G'),'per-composite result after averaging analytical duplicates',1,'Each field composite pools three plants; each market composite pools three bunches. Analytical duplicates were averaged. Composite rows share farms and are not independent study families.'),'id':f'lg-full-kim-S2-r{n}','site_id':r['site_id'],'site_type':r['site_type'],'sampling_location':r['sampling_location'],'within_site_source_order':order,'reported_value_original':v,'reported_value':v*factor(unit),'detection_flag':r['below_detection_limit'],'value':v*factor(unit) if r['below_detection_limit']=='no' else None,'lower_bound':v*factor(unit) if r['below_detection_limit']=='no' else 0,'upper_bound':v*factor(unit),'censoring':'Source substitutes the full detection limit before averaging; exact below-limit flags retained. Reported limit is not a measured concentration.' if r['below_detection_limit']!='no' else 'Reported quantified composite result'}
 records.append(record)
assert len(records)==1152
moisture=collections.defaultdict(list)
for r in raw:
 if r['attribute']=='Moisture':moisture[(r['site_id'],r['sampling_location'])].append(float(r['result'])/100)
conversion_checks=[]
for site,location,attribute,order,basis in lookup:
 if basis!='dry' or order!=1:continue
 fresh=[v['value'] for k,v in lookup.items() if k[:3]==(site,location,attribute) and k[4]=='fresh'];dry=[v['value'] for k,v in lookup.items() if k[:3]==(site,location,attribute) and k[4]=='dry'];waters=moisture[(site,location)]
 assert len(fresh)==len(dry)==len(waters)
 minimum_correct_sum=sum(fresh)/(1-min(waters));reported_sum=sum(dry)
 conversion_checks.append({'site':site,'location':location,'analyte':attribute,'reported_dry_sum':reported_sum,'minimum_sum_under_stated_formula_for_any_sample_pairing':minimum_correct_sum,'inconsistent':reported_sum+1e-8<minimum_correct_sum})
assert len(conversion_checks)==198 and all(c['inconsistent'] for c in conversion_checks)
(b/'kim-moisture-conversion-check.json').write_text(json.dumps({'formula':'C_dry=C_fresh/(1-W), W the wet fraction, as stated in paper Methods','pairing':'The S2 worksheet has no sample IDs and row order is not a reliable cross-analyte pairing. This test sums each farm/location/analyte group and uses its minimum wet fraction: every possible valid pairing must have a dry sum at least sum(FW)/(1-min(W)).','checks':conversion_checks,'conclusion':'All198 field/market/analyte groups violate this necessary bound. Source-labelled dry concentrations are retained but cannot be admitted as verified dry-mass measurements without clarification. No values are silently repaired.'},indent=2)+'\n')
for r in records:
 if r['basis'].startswith('Dry'):
  r.update(basis='Source-labelled dry weight; conversion inconsistent with stated moisture formula',value=None,lower_bound=None,upper_bound=None,censoring='Original nominal dry value retained. Independent moisture integrity check fails; no verified dry-basis concentration or bound assigned. Cross-basis sample identity is not supplied in this worksheet.')
# Bound the eight partially censored duplicate-pair cells using known fresh-basis reporting limits.
limits={'tAs':10,'Ni':50,'Pb':5,'U':5,'V':10};partial=0
for r in records:
 if r['detection_flag']!='some, but not all duplicates':continue
 if r['basis']!='Fresh weight':partial+=1;continue
 limit=limits[r['analyte']]
 r['lower_bound']=max(0,r['reported_value']-limit/2);r['upper_bound']=r['reported_value'];r['censoring']='One of an analytical duplicate pair is below its stated fresh-basis detection limit; original source replaced it with the limit. The true pair-average is bounded by reported average minus half that limit through reported average.';partial+=1
assert partial==8
summary_count=0
for sheet in ['Table S3','Table S4']:
 s=w[sheet];hdr=[c.value for c in next(s.iter_rows(min_row=3,max_row=3))]
 for n,row in enumerate(s.iter_rows(min_row=4,values_only=True),4):
  if not row[0]:continue
  r=dict(zip(hdr,row))
  if r.get('attribute_group') not in ['nutritional_element','non_essential_metal']:continue
  code=codes[r['attribute']];unit=r['unit'];stats={k:r[k] for k in ['mean','standard_dev','standard_error','min','median','max']};records.append({**common(code,unit,loc(sheet,n,'A'),'source-reported mean, SD, SE, minimum, median and maximum',int(r['count']),'Field samples only; six farm clusters overall. Summary statistics include full-LOD substitutions; do not insert the reported median as an observed point when censored. Raw S2 records supply recoverable bounds.'),'id':f'lg-full-kim-{sheet.replace(" ","")}-r{n}','site_id':r.get('site_id','All six farms'),'sampling_location':r['sampling_location'],'reported_statistics':stats,'value':r['mean']*factor(unit),'censoring':'Source summary uses full-LOD substitution; original medians/means retained as reported, reference units must come from bounded raw S2 values.','reference_role':'Target summary only; raw observations already represent this family and must not be duplicated as new reference units.'});summary_count+=1
assert summary_count==252
# Retain both urban/rural field means and SE in the primary manuscript Table2.
inv=json.load(open(b/'access-inventory.json'))['items'];i=next(i for i in inv if i['source_id']==source);md=pathlib.Path(i['artifact']['text_path']).read_text();main=[]
for line in md.splitlines():
 if not line.startswith('|'):continue
 c=[x.strip() for x in line.split('|')[1:-1]]
 if len(c)!=8:continue
 name=re.sub('<[^>]+>','',c[1]).replace(' ','');code=next((v for k,v in codes.items() if k.replace(' ','')==name),None)
 if not code:continue
 unit=re.sub('<[^>]+>',' ',c[2]);unit=re.sub(r'\s+',' ',unit)
 for j,label in [(3,'Urban'),(4,'Rural')]:
  m=re.fullmatch(r'(\d+(?:\.\d+)?)\s*±\s*(\d+(?:\.\d+)?)',c[j]);assert m,(name,c[j]);v,se=map(float,m.groups());main.append({**common(code,unit,{'artifact':i['artifact']['path'],'sha256':i['artifact']['sha256'],'kind':'cell','location':f'Primary Table2, {name}, {label} field samples'},'source-reported rounded mean ± SE',7 if label=='Urban' else 16,'Urban means reflect seven field composites from two farms; rural means16 field composites from four farms. Source statistical comparisons use farm means (six clusters), not23 independent farms.'),'id':'lg-full-kim-Table2-'+code+'-'+label.lower(),'site_type':label,'reported_value_original':v,'reported_se_original':se,'value':v*factor(unit),'se':se*factor(unit),'censoring':'Source substitutes detection limits before analysis. These are original rounded summaries; retain bounded raw observations for reference recovery.'})
assert len(main)==36,len(main);records+=main
assert len(records)==1440
for r in records:
 if r['basis'].startswith('Dry'):
  r['reported_summary_value']=r.get('value');r.update(basis='Source-labelled dry weight; conversion inconsistent with stated moisture formula',value=None,lower_bound=None,upper_bound=None,censoring='Source-labelled dry summary retained verbatim; raw S2 moisture-conversion integrity check fails. Not a verified dry-mass result or reference unit.')
(b/'kim-workbook-raw.json').write_text(json.dumps({'artifact':str(p),'sha256':digest,'rows':raw},indent=2)+'\n');(b/'recovered-kim-results.json').write_text(json.dumps({'records':records,'counts':{'raw_element_cells':1152,'farm_and_overall_summary_rows':252,'urban_rural_mean_se_rows':36},'limitations':'Secondary SUH/USDA comparison columns in manuscript Table2 are contextual comparisons, not new measurements from this study. S1 certified/QC materials are controls, not kale study foods; vitamins/carotenoids and mass/time/moisture metadata are retained as context/conversion data rather than metal occurrence.'},indent=2)+'\n')
(b/'primary-review-kim.json').write_text(json.dumps({'source_id':source,'reviewed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'identity_verified':True,'completeness_verified':True,'identity_proof':'Primary manuscript title, Kim etal authors and DOI10.1371/journal.pone.0296840 agree with source. Complete manuscript includes methods, figures1–4, funding/conflicts, all references and Supporting information links. Publisher DOI.s001 yielded workbook with TablesS1–S5, exact paper labels,32 composite records per element/basis, fresh/dry values and explicit censor flags. S2/S3/S4 concentration tables are complete.','artifact':i['artifact'],'supporting_workbook':{'path':str(p),'sha256':digest},'decision':'occurrence_extracted','extraction_complete':True,'result_ids':[r['id'] for r in records],'scope':'32 washed de-ribbed Darkibor kale composites from six farms,2019. Fresh/dry basis kept separate. Six farms, not32 independent studies. All18 elements in two bases and all primary field summary statistics retained.','censoring':'Explicit below-detection flags permit interval recovery for fresh-weight values. Four partly censored fresh duplicate-pair means are bounded; four nominal dry counterparts have no verified dry bounds. Full-LOD substituted scalars are not observed medians.','dry_basis_issue':'All198 farm/location/analyte groups fail the necessary stated moisture-conversion bound, independent of sample-row pairing. Nominal dry values retained, excluded from verified dry-basis references. See kim-moisture-conversion-check.json.','superseded_extraction':'Initial cross-basis order assumption and dry partial bounds withdrawn; preserved in superseded/kim-before-moisture-integrity-check.','nonresults':'QC reference materials, moisture/weight/time, organic nutrient analytes, secondary older-study comparison columns and ANOVA F/P tests are distinct context; no extra independent kale concentration observations.'},indent=2)+'\n');print('Recovered Kim:1152 raw elemental cells +252 summary rows +36 urban/rural means =1440 records')
