"""Read all chocolate rows in the verified official FSANZ result appendices."""
from pathlib import Path
import re,json,hashlib
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa';P=D/'primary-recovered';OUT=D/'extractions'
mapping={'aluminium':'Al','arsenic (total)':'tAs','arsenic (inorganic)':'iAs','cadmium':'Cd','lead':'Pb','mercury (total)':'tHg','mercury (inorganic)':'iHg','methylmercury':'MeHg','nickel':'Ni','strontium':'Sr','chromium':'Cr','cobalt':'Co','copper':'Cu','iron':'Fe','manganese':'Mn','molybdenum':'Mo','selenium':'Se','zinc':'Zn','calcium':'Ca','potassium':'K','fluoride':'F'}
def num(x):
 try:return float(x.replace(',',''))
 except:return None
for study in [2011,2019]:
 pdf=P/f'fsanz{study}-appendices.pdf';text=pdf.with_suffix('.txt').read_text();rows=[];title=None;metal=None;table=None
 for page,part in enumerate(text.split('\f'),1):
  if study==2011 and not 43<=page<=145:continue
  if study==2019 and not 7<=page<=27:continue
  if study==2011:
   headers=list(re.finditer(r'Table (A\d+\.\d+)\s*[–-]\s*Concentrations of ([^\n]+?) in foods\s*\(([^)]+)\)',part,re.I))
  else:
   headers=list(re.finditer(r'Table (A[^\n]+?)\s*:\s*Concentrations of ([^\n]+?) in foods',part,re.I))
  if headers:
   h=headers[-1];table=h[1];title=h[2].lower().strip();title={'total arsenic':'arsenic (total)','inorganic arsenic':'arsenic (inorganic)','total mercury':'mercury (total)'}.get(title,title);metal=mapping.get(title)
  if not metal:continue
  for line in part.splitlines():
   match=re.match(r'^\s*(Cake, chocolate, iced|Chocolate, milk|Hot chocolate beverage)\s{2,}(.+)',line)
   if not match:continue
   form,rest=match.groups();cells=re.split(r'\s{2,}',rest.strip());tokens=rest.replace(',','').split()
   if not tokens or not tokens[0].isdigit():continue
   if study==2011:
    assert len(tokens) in [6,8],(study,page,form,tokens)
    n=int(tokens[0]);nd=int(tokens[1]);vals=[num(v) for v in tokens[2:]]
    if len(vals)==6:
     meanlo,meanhi,medlo,medhi,minimum,maximum=vals;reported={'mean_nd_zero':meanlo,'mean_nd_LOR':meanhi,'median_nd_zero':medlo,'median_nd_LOR':medhi,'min_text':tokens[-2],'max':maximum,'unit':'mg/kg'};value=medlo if medlo==medhi else None;lower,upper=medlo,medhi;statistic='reported LB/UB means and medians, minimum and maximum'
    else:
     meanlo,meanhi,minimum,maximum=vals;reported={'mean_nd_zero':meanlo,'mean_nd_LOR':meanhi,'min_text':tokens[-2],'max':maximum,'unit':'mg/kg'};value=meanlo if meanlo==meanhi else None;lower,upper=meanlo,meanhi;statistic='reported LB/UB mean, minimum and maximum'
   else:
    n=int(tokens[0]);detected=int(tokens[1]);nd=n-detected
    if 'Nil detects' in rest:
     reported={'n_detected':0,'all_below_LOR':True,'lor':.005,'unit':'mg/kg'};value=None;lower=0;upper=.005;statistic='all source composites below0.005mg/kg reporting limit (main reportTable2,PDFpage20)'
    else:
     assert len(tokens)==9,(study,page,form,tokens)
     meanlo,medlo,meanhi,medhi,minimum,maximum=[num(x) for x in tokens[3:]];reported={'mean_nd_zero':meanlo,'median_nd_zero':medlo,'mean_nd_LOR':meanhi,'median_nd_LOR':medhi,'min_text':tokens[-2],'max':maximum,'unit':'mg/kg'};value=medlo if medlo==medhi else None;lower,upper=medlo,medhi;statistic='reported LB/UB means and medians, minimum and maximum'
   if metal in ['Ca','K','F']:
    eligibility='nutritional/nonmetal context, outside metallic-contaminant occurrence scope'
   else:eligibility='occurrence_extracted'
   rows.append({'id':f'fsanz{study}-{metal}-{form.split(",")[0].replace(" ","-").lower()}','analyte':metal,'form':form,'n':n,'n_note':'Independent food composites; each pools three retail purchases, not individual consumers or laboratory replicates.','n_below_reporting_limit':nd,'reported':reported,'value':value,'lower_bound':lower,'upper_bound':upper,'unit':'mg/kg','statistic':statistic,'basis':'table-ready/as-consumed composite, exact food preparation retained','market':'Australia nationally distributed foods, not growing origin','year':'January/February andJune/July2008' if study==2011 else 'May2013 andFebruary2014','locator':f'{table}, official appendices PDFpage{page}, {form}','artifact':str(pdf.relative_to(ROOT)),'artifact_sha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'eligibility':eligibility,'censoring':'Source nd=0 and nd=LOR are identification endpoints for censoring, not observed zero concentrations. Minimum <LOR stays a bound. No dilution/recipe or moisture conversion.','limitations':'Summary medians of four composites; not a current market sample or a country-of-origin result. Parent food category/exposure tables and main-report comparative tables repeat these results, not new independent datasets.'})
 assert len({r['id'] for r in rows})==len(rows),(study,'duplicateIDs')
 out={'source_id':f'fsanz{study}-'+('23rd-australian-total-diet-study' if study==2011 else '25th-australian-total-diet-study'),'artifact':str(pdf.relative_to(ROOT)),'sha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'identity_verified':True,'completeness_verified':True,'identity_proof':'Appendix title, table numbering, food definitions, survey periods and methods match the official FSANZ study. Retrieved from download linked on official Australian Total Diet Study page; full PDF toEOF,258pages(23rd) /248pages(25th).','rows':rows,'extraction_complete':True,'remaining_extraction':[],'scope':'All actual chocolate/iced-cake/hot-chocolate rows in metallic-contaminant and trace-element concentration tables. Macro-nutrient/nonmetal rows retained explicitly as context. Other ag/vet residues, exposure models and national category roll-ups do not become new metal occurrence samples.'}
 (OUT/(out['source_id']+'.json')).write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(study,len(rows),'printed rows',sum(r['eligibility']=='occurrence_extracted' for r in rows),'metallic/trace-element occurrence rows')
