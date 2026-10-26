"""Recover printed primary facts; never manufacture independent field sample counts."""
from pathlib import Path
import json,re,hashlib
import pdfplumber
ROOT=Path(__file__).resolve().parents[4]
D=ROOT/'data/evidence/contracts/cocoa';OUT=D/'extractions';OUT.mkdir(parents=True,exist_ok=True)
old=json.loads((ROOT/'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/corpus-review/access-reviewed.json').read_text())['records']
def source(prefix):return next(r for r in old if r['source_id'].startswith(prefix))
def save(key,obj):(OUT/(key+'.json')).write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
def digest(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
a=source('abt2018');assert digest(a['artifact_path'])==a['artifact_sha256']
with pdfplumber.open(a['artifact_path']) as pdf:
 assert len(pdf.pages)==28
 clean=[p.filter(lambda o:o.get('object_type')!='char' or o.get('size',0)<20).extract_text() or '' for p in pdf.pages]
 assert '10.1080/19393210.2017.1420700' in '\n'.join(clean[:3])
 assert all(s in '\n'.join(clean[:7]) for s in ['Cadmium and Lead in Cocoa Powder','December 2015','January 2016','One hundred and forty four'])
 raw=[]
 for page,text in enumerate(clean[19:],20):
  starts=list(re.finditer(r'(?<!\d)(\d{1,3})_(dark|milk|cocoa)\b',text))
  for i,m in enumerate(starts):
   chunk=text[m.start():starts[i+1].start() if i+1<len(starts) else len(text)]
   v=re.search(r'\b(cadmium|lead)\s+(\d+\.\d+)\s*(<)?\s*mg/kg',chunk)
   assert v,(page,chunk)
   sample=int(m[1]);metal='Cd' if v[1]=='cadmium' else 'Pb';val=float(v[2]);trace=bool(v[3]);form='dark chocolate' if m[2]=='dark' else 'milk chocolate' if m[2]=='milk' else 'cocoa nibs' if sample in range(132,139) else 'cocoa powder including drink mixes'
   lod,loq=(.000408,.00371) if metal=='Cd' else (.00120,.0109)
   if metal=='Pb' and sample in [134,135,136]:
    value=None;lo=0;hi=lod;status='Authors replaced these three nib non-detects with zero; preserved as <LOD, never measured zero.'
   elif trace:
    value=None;lo=max(lod,val-.005);hi=min(loq,val+.005);status='Appendix trace flag; detected between LOD and LOQ. Bound intersects method limits and rounding to 0.01 mg/kg; not an exact value.'
   elif val==0:
    value=None;lo=loq;hi=.005;status='Printed 0.00 after rounding; Cd is quantified per Table 3. Kept as rounding interval above LOQ, not measured zero.'
   else:
    value=val;lo=hi=val;status='Source appendix rounded to 0.01 mg/kg; retain printed precision, not the original unrounded analytical value.'
   raw.append({'id':f'abt2018-sample-{sample:03}-{metal}','analyte':metal,'form':form,'sample_id':sample,'n':1,'sample_unit':'retail product; one product homogenate, not a new lot for each analyte','unit':'mg/kg','value':value,'lower_bound':lo,'upper_bound':hi,'printed_value':v[2],'trace_flag':trace,'censoring':status,'locator':f'Appendix, PDF page {page}, sample {sample}, {metal}','basis':'ready-to-eat basis as explicitly reported in Methods; original sampled product, no recipe or moisture conversion','market':'US retail / online; Maryland purchase market','year':'December 2015–January 2016','lod':lod,'loq':loq})
 assert len(raw)==288 and len({(r['sample_id'],r['analyte']) for r in raw})==288
 for metal in ['Cd','Pb']:
  for form,n in [('dark chocolate',57),('milk chocolate',41),('cocoa powder including drink mixes',39),('cocoa nibs',7)]:assert sum(r['analyte']==metal and r['form']==form for r in raw)==n
 summaries=[]
 table={
 'Cd':[(57,.27,.19,.25,.02,1.29),(41,.06,.04,.07,.004,.31),(39,.70,.35,.83,.01,3.15),(7,.62,.48,.38,.32,1.44)],
 'Pb':[(57,.03,.02,.02,.002,.11),(41,.01,.008,.01,.002,.07),(39,.11,.08,.10,.002,.38),(7,.003,.002,.004,None,.01)]}
 forms=['dark chocolate','milk chocolate','cocoa powder including drink mixes','cocoa nibs']
 for metal,groups in table.items():
  for form,(n,mean,median,sd,minimum,maximum) in zip(forms,groups):
   summaries.append({'id':f'abt2018-{metal}-{forms.index(form)}-summary','analyte':metal,'form':form,'n':n,'reported':{'mean':mean,'median':median,'sd':sd,'min':minimum,'max':maximum,'unit':'mg/kg','min_text':'<LOD' if minimum is None else str(minimum)},'statistic':'reported mean, median, SD and min–max','locator':f'Table {3 if metal=="Cd" else 4}, PDF page {13 if metal=="Cd" else 14}, {form}','censoring':'Pb includes trace estimates; three nib results <LOD were set to zero BY THE AUTHORS in these printed summaries; original convention preserved, not observed zero.' if metal=='Pb' else 'All quantified; sample appendix has two-decimal rounding, unlike more precise printed minimum.','basis':'ready-to-eat basis, as stated in Methods; powder group includes drink mixes','year':'December 2015–January 2016','market':'US retail; label/website origin, not independent geographic authentication'})
 for metal,values in [('Cd',[(.16,.11),(.05,.07),(.46,.62)]),('Pb',[(.03,.02),(.01,.003),(.09,.07)])]:
  for form,n,(mean,sd) in zip(forms[:3],[23,22,20],values):summaries.append({'id':f'abt2018-{metal}-{forms.index(form)}-unknown-origin','analyte':metal,'form':form,'origin':'unknown or multiple origins; cannot assign to Africa/Latin America','n':n,'reported':{'mean':mean,'sd':sd,'unit':'mg/kg'},'statistic':'reported origin-unclassified subgroup mean ±SD','locator':f'Figure {5 if metal=="Cd" else 6} caption, PDF page {18 if metal=="Cd" else 19}'})
 summaries.extend([
 {'id':'abt2018-Cd-pure-powder-mean','analyte':'Cd','form':'100% cocoa powder','n':26,'reported':{'mean':.99,'sd':.87,'unit':'mg/kg'},'statistic':'reported mean ±SD','locator':'Results, PDF page 7, paragraph above geographic-origin subsection; Table 5 footnote f'},
 {'id':'abt2018-Cd-unknown-percentage','analyte':'Cd','form':'mixed cocoa/chocolate, cocoa percentage not declared','n':18,'reported':{'mean':.10,'sd':.26,'unit':'mg/kg'},'statistic':'reported mean ±SD','locator':'Figure 1 caption, PDF page 15'},
 {'id':'abt2018-Pb-unknown-percentage','analyte':'Pb','form':'mixed cocoa/chocolate, cocoa percentage not declared','n':18,'reported':{'mean':.03,'sd':.03,'unit':'mg/kg'},'statistic':'reported mean ±SD','locator':'Figure 2 caption, PDF page 15'}])
 save(a['source_id'],{'source_id':a['source_id'],'artifact':a['artifact_path'],'sha256':a['artifact_sha256'],'identity_verified':True,'completeness_verified':True,'identity_proof':'Title, Abt/Sam/Gray/Robin authors, DOI on title/accepted-manuscript pages; 28-page complete accepted manuscript, Tables 1–5, Figures 1–6 and 144-product Cd/Pb appendix ending sample 144.','total_products':144,'manufacturers':67,'method':'FDA EAM 4.7 ICP-MS; ready-to-eat basis; targeted convenience sample, no inclusions','summaries':summaries,'sample_results':raw,'remaining_extraction':['Figure 1–2 cocoa-percentage-bin graphical mean/SD bounds','Figure 5–6 origin/form graphical box summaries; counts 8/26 dark,7/12 milk,6/13 powder,0/7 nib Africa/Latin America. No exact printed origin median table.','Figures 3–4 scatter concentrations overlap appendix samples; cocoa-percentage coordinates remain figure-only, not additional independent products.'],'extraction_complete':False})
r=source('romero-estevez2019');assert digest(r['artifact_path'])==r['artifact_sha256']
text=Path(ROOT/r['text_path']).read_text();assert '10.1016/j.foodcont.2019.106750' in text
provinces=['Azuay','El Oro','Esmeraldas','Santo Domingo de los Tsáchilas','Manabí','Guayas','Los Ríos','Napo','Bolívar']
cd=[(.55,.62,.60),(.39,.50,.44),(1.07,1.46,1.22),(.35,.464,.42),(.42,.56,.55),(1.60,1.75,1.73),(.78,1.00,.89),(.24,.30,.28),(.63,.76,.70)]
rows=[{'id':f'romero2019-Cd-table2-{i+1}','analyte':'Cd','province':p,'reported':{'min':lo,'max':hi,'mean':mean,'unit':'mg/kg','n_printed':9},'n_independent_field_lots':None,'n_note':'Table 2 prints n=9 per province, corresponding to analytical preparations (6 FAAS +3 GFAAS), not nine proven independent growing lots.','statistic':'Table 2 combined-technique preparation range and mean','locator':f'Table 2, PDF page 28, current-study column, {p}','basis':'fresh weight, explicitly Methods PDF page 7 line 141; fermented/dried bean material, no conversion to dry weight','form':'fermented/dried cocoa beans'} for i,(p,(lo,hi,mean)) in enumerate(zip(provinces,cd))]
for metal,mean,lo,hi,lop,hip in [('Cd',.753,.267,1.715,'Napo','Guayas'),('Ni',3.930,1.462,8.528,'Bolívar','Esmeraldas'),('Pb',1.432,.502,1.966,'Napo','Santo Domingo de los Tsáchilas')]:
 rows.append({'id':f'romero2019-{metal}-narrative-overall','analyte':metal,'reported':{'mean':mean,'min':lo,'max':hi,'unit':'mg/kg'},'minimum_province':lop,'maximum_province':hip,'n_independent_field_lots':None,'statistic':'narrative overall mean and range across provincial summaries, not individual-bean range','locator':'Results §3.2, PDF pages 10–12; abstract','form':'fermented/dried cocoa beans'})
for metal,entries in [('Cd',[('Napo',.267,.029),('Guayas',1.715,.089),('Esmeraldas',1.249,None),('Los Ríos',.882,None)]),('Ni',[('Bolívar',1.462,.146),('Esmeraldas',8.528,.426),('Manabí',6.033,None),('Azuay',4.428,None)]),('Pb',[('Napo',.502,.057),('Santo Domingo de los Tsáchilas',1.966,.184),('Esmeraldas',1.833,None),('Guayas',1.750,None)])]:
 for i,(p,mean,disp) in enumerate(entries):rows.append({'id':f'romero2019-{metal}-narrative-{i+1}','analyte':metal,'province':p,'reported':{'mean':mean,'plus_minus':disp,'unit':'mg/kg'},'n_independent_field_lots':None,'statistic':'narrative provincial mean; ± term called RSD in figure caption, not silently labelled SD','locator':'Results §3.2, PDF pages 10–12; Figure 1–3 captions PDF page 22','form':'fermented/dried cocoa beans'})
save(r['source_id'],{'source_id':r['source_id'],'artifact':r['artifact_path'],'sha256':r['artifact_sha256'],'identity_verified':True,'completeness_verified':True,'identity_proof':'Romero-Estévez et al.; DOI10.1016/j.foodcont.2019.106750; full accepted manuscript28pages with Methods, Results, references, Figures1–4 and Tables1–2.','sampling_units':{'provinces':9,'independent_field_lots':None,'analytical_preparations_per_province':9,'total_analytical_preparations':81,'total_analyte_observations':243,'reported_basis':'fresh weight, Methods PDF page 7 line 141','note':'Table1 lists nine province-linked sample entries. Six FAAS and three GFAAS preparations per province; validation/replication counts are not field-sample counts.'},'analytical_limits_mg_kg':{'FAAS':{'Cd':.25,'Ni':7.5,'Pb':7.5},'GFAAS':{'Cd':.0125,'Ni':.125,'Pb':.125}},'rows':rows,'conflicts':['Narrative/abstract Cd provincial means differ from combined-technique Table2 means; retain both estimators and explicit source disagreement.','Ni overall mean3.930 in abstract/§3.2 vs3.390 in line278; preserve typo/discrepancy without correction by assumption.','Figures1–3 captions call mean±RSD but artwork uses boxplots; medians/boxes are not silently recast as means/SD.','FAAS Ni/Pb plotted concentrations frequently below the stated7.5mg/kg quantification limit; report as source method limitation, not fully validated exact concentrations.'],'remaining_extraction':['Digitize bounded graphical results for all provinces/techniques in Figures1–3; numerical tables do not print every Ni/Pb province value.','Carry Table1 province/variety/fermentation/drying metadata into all graphical row provenance; Methods explicitly reports fresh-weight concentrations.'],'extraction_complete':False})
print('Abt: 288 sample/analyte records,',len(summaries),'printed summary records; Romero:',len(rows),'printed result records. Figure-only extraction remains explicit.')
