"""Cocoa-associated rows in recovered cereal-bar and child-beverage papers."""
from pathlib import Path
import json,zipfile,xml.etree.ElementTree as E,hashlib,re
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa';P=D/'primary-recovered'
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
rows=[]
for metal,mean,sd,mdl in [('tAs',17.4,.9,2.5),('Cd',16.8,.1,.3),('Pb',15.8,4.2,1.6)]:
    rows.append(dict(id=f'hidalgo2015-chocolate-{metal}',analyte=metal,form='gluten-free rice/whole-amaranth cereal bar with dark chocolate',market='Argentina retail; ingredient growing origins unreported',year='May–July 2014',n=6,sample_unit='commercial cereal bar',n_note='Six chocolate-formulation bars within 72 total bars/nine brands; lot and within-brand clustering not resolved by the printed summary.',reported=dict(mean=mean,sd=sd,unit='µg/kg',method_detection_limit=mdl),value=mean/1000,lower_bound=mean/1000,upper_bound=mean/1000,unit='mg/kg',statistic='source group mean ±SD',basis='homogenized cereal bar as sampled; no dry-weight normalization',locator=f'Table 2, PDF page 3, Chocolate, {metal}; formulation Methods PDF page 2',method='500 mg homogenate, HNO3/H2O2 microwave digestion, ICP-MS Agilent 7700x; measured total arsenic, no inorganic species result.',censoring='Printed chocolate-group mean above method detection limit; no sample-specific censored result list or LOQ provided.',limitations='Whole bar contains rice/amaranth, chocolate, sugar and cocoa butter; cannot assign measured metals solely to cocoa. Group mean is not six recovered individual values.'))
j=dict(source_id='hidalgo2015-gluten-free-cereal-bars-argentina',artifact=str(P/'hidalgo2015.pdf'),sha256=sha(P/'hidalgo2015.pdf'),identity_verified=True,completeness_verified=True,extraction_complete=True,rows=rows,
    identity_proof='Publisher five-page original, exact title/five authors/DOI 10.12691/ijcd-3-1-4; file SHA256 exactly matches canonical declared digest.',
    complete_scope='All three chocolate-formulation concentration summaries, Table 2. No sample-specific individual table or figure contains additional chocolate concentrations. Table 1 instrument conditions, Table 3 estimated guidance-value contributions; non-chocolate bars are separate formulations.',
    exposure_context=dict(locator='Table 3 PDF page 4 and exposure Methods',serving_scenario_g_day=46,scenario='two manufacturer-labelled bars/day; body weights male70/female65 kg',source_guidance_percent=dict(tAs=3.8,Cd=2.2,Pb=3.4),limit='Source model percentages are not validated safety allowances. Total As is not inorganic As; BMDLs are not safe-intake thresholds. No safe serving frequency derived.'),
    source_conflicts=['Abstract says all Cd lower than 10 µg/kg or below MDL, omitting the chocolate exception. Table 2 and Results explicitly report chocolate mean 16.8 µg/kg. Preserve actual table and the scope conflict.'])
(D/'extractions'/f"{j['source_id']}.json").write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Hidalgo:',len(rows),'chocolate bar summaries.')

ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
def tables(file):
    root=E.fromstring(zipfile.ZipFile(file).read('word/document.xml'))
    # The S9 Word file has a nested table. Read each leaf table only;
    # never count the wrapping cell as a second copy of all results.
    out=[]
    for t in root.findall('.//w:tbl',ns):
        if t.findall('.//w:tbl',ns):continue
        out.append([[''.join(c.itertext()).strip() for c in r.findall('w:tc',ns)] for r in t.findall('w:tr',ns)])
    return out
all_s9=[r for table in tables(P/'frisbie2019-s009.docx') for r in table]
rows=[]
info={'US10':dict(market='United States',protein='cow milk',supplemented=True,age='1–13 years',medical=True,main=[11,2100,240]),
      'US11':dict(market='United States',protein='goat milk',supplemented=False,age='13 months–8 years',medical=False,main=[9.2,1100,220]),
      'FR08':dict(market='France',protein='cow milk',supplemented=False,age='6+ months',medical=False,main=[5.9,1200,140])}
for sample,meta in info.items():
    base=dict(analyte='Mn',form=f'chocolate-containing {meta["protein"]} young-child nutritional product',market=meta['market']+' retail; growing origin unspecified',year='purchase date not explicitly reported',n=1,sample_unit='one physical commercial product container',n_note='Three PIXE spots are analytical replicates, not independent products. Maximum-variation purposive sample, not a population survey.',supplemental_manganese=meta['supplemented'],labelled_age_range=meta['age'],medical_product=meta['medical'],censoring='Reported quantified positive result; no sample-specific numerical LOD/LOQ supplied.',limitations='Whole formulated nutritional product, not isolated cocoa. Supplemented US10 cannot attribute total Mn to a particular ingredient. Its age/purpose differs from the other products; no independent causal ingredient effect or safe feeding rule.')
    for index,(value,unit,basis) in enumerate(zip(meta['main'],['mg/kg','µg/L','µg/100 kcal'],['dry analytical solid mass, explicit PIXE/RBS Methods','prepared product following manufacturer label; source volume basis','prepared product per labelled 100 kcal'])):
        rows.append(dict(**base,id=f'frisbie2019-{sample}-table-{index+1}',statistic='source printed rounded product mean/conversion',value=value,lower_bound=value,upper_bound=value,unit=unit,basis=basis,reported=dict(value=value,unit='µg/g' if index==0 else unit),locator=f'Table {1 if sample.startswith("US") else 2}, PDF page {7 if sample.startswith("US") else 8}, {sample}, column {index+2}',conversion='µg/g = mg/kg; volume and energy values remain in their source dimensions. No density or moisture conversion invented.'))
    relevant=[r for r in all_s9 if r and re.fullmatch(sample+'[abc]?',r[0])]
    assert len(relevant)==4,(sample,relevant)
    for r in relevant:
        is_mean=r[0]==sample
        value=float(r[2] if is_mean else r[1]);sd=float(r[3]) if is_mean else None
        rows.append(dict(**base,id=f'frisbie2019-{r[0]}-S9',statistic='three-spot analytical mean ±sample SD' if is_mean else 'single PIXE technical spot result',value=value,lower_bound=value,upper_bound=value,unit='mg/kg',basis='dry analytical solid mass by simultaneous PIXE/RBS',reported=dict(value=value,sd=sd,unit='µg/g'),locator=f'Supplement Table S9, sample {r[0]}, '+('Mean Mn / s' if is_mean else 'Mn'),overlap='Same physical product as rounded main-table result; analytical spots/mean never count as four independent products.'))
assert len(rows)==21
j=dict(source_id='frisbie2019-manganese-infant-formula-beverages',artifact=str(P/'frisbie2019.pdf'),sha256=sha(P/'frisbie2019.pdf'),identity_verified=True,completeness_verified=True,rows=rows,extraction_complete=True,
    identity_proof='Complete PLOS ONE 14(11)e0223636 original, 23 pages, exact six authors/title/DOI; PDF SHA256 matches canonical declared hash. Supporting Table S1 identifies all three chocolate products and S9 supplies all analytical spots/precise means.',
    complete_scope='All three explicitly chocolate-containing products (including supplemented US10), all three main-table concentration dimensions, all three precise S9 means/SDs and all nine technical spot results. Main Figure 1 repeats the product comparisons; broad country totals/Table 3 supplemented and soy aggregates are not isolated chocolate groups.',
    supplements=[dict(artifact=str(P/f'frisbie2019-s{n:03}.docx'),sha256=sha(P/f'frisbie2019-s{n:03}.docx'),locator=f'Table S{n}',identity_verified=True) for n in [1,9]],
    source_scope='Main interpretation classifies only two non-supplemented products as the chocolate subgroup. That does not exclude explicitly chocolate-containing supplemented US10 from Cocoa occurrence.',
    validation='NIST SRM1849a Mn mean49.48±1.61 µg/g versus certified49.59±.97; these are method-validation values, not cocoa occurrence or product uncertainty.',
    no_attribution='No cocoa-only causal attribution. One US product contains both goat milk and chocolate, the other supplemental Mn and chocolate. No different food regimen or serving advice inferred.')
(D/'extractions'/f"{j['source_id']}.json").write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Frisbie:',len(rows),'records across three physical products; analytical repeats identified.')

p=D/'content-dispositions.json';d=json.loads(p.read_text());f=P/'fda2025-skin-protectant.pdf'
assert sha(f)=='073184a9087eb29ce0ff3a9b0cb91b26060f8e086633c19b2770f2ce92552e7b'
d['decisions']['fda2025-21cfr347-skin-protectant-otc']=dict(disposition='out_of_scope',artifact=str(f),sha256=sha(f),identity_proof='Official 2025 CFR Title21 part347 PDF, exact canonical SHA256; headings/sections verified.',locator='21 CFR §347.10(d), cocoa butter50–100%; §347.50 topical skin-protectant labelling',rationale='Cocoa butter is listed as a topical OTC skin-protectant active ingredient. This regulation provides no oral-food contaminant observation or cocoa food-processing mitigation. Topical active-ingredient percentage is not an edible-cocoa metal concentration or food standard.')
p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
p=P/'source-access-proposals.json';d=json.loads(p.read_text());d['sources'].update({'hidalgo2015-gluten-free-cereal-bars-argentina':[str((P/'hidalgo2015.pdf').resolve())],'frisbie2019-manganese-infant-formula-beverages':[str((P/'frisbie2019.pdf').resolve())],'fda2025-21cfr347-skin-protectant-otc':[str(f.resolve())]});p.write_text(json.dumps(d,indent=2)+'\n')
