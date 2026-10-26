"""All printed thesis food-metal groups; source contradictions remain visible."""
from pathlib import Path
import json,hashlib
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
r=next(x for x in json.loads((D/'review-index.json').read_text())['records'] if x['source_id'].startswith('burgon2023'))
assert hashlib.sha256(Path(r['resolved_path']).read_bytes()).hexdigest()==r['artifact_sha256']
rows=[];metals=['Cd','Co','Cu','Pb','Se'];lod={'Cd':.001,'Co':.002,'Cu':.007,'Pb':.005,'Se':.019,'tAs':.015,'tHg':.007};loq={'Cd':.002,'Co':.003,'Cu':.010,'Pb':.007,'Se':.029,'tAs':.022,'tHg':.010}
# mean, minimum text, maximum, detected/quantified N, optional analytical SD.
forms=[
 ('bean-to-bar','white',2,[(None,'<.001',None,0,None),(.05,'<.002',.012,1,None),(.15,.11,.20,2,None),(.020,'<.005',.039,1,None),(None,'<.019',None,0,None)]),
 ('bean-to-bar','milk',12,[(.025,.009,.094,12,None),(.23,.06,.94,12,None),(3.90,1.63,9.24,12,None),(.012,'<.005',.037,9,None),(.018,'<.019',.077,4,None)]),
 ('bean-to-bar','semi-bitter',17,[(.041,.004,.10,17,None),(.37,.12,.63,17,None),(8.22,4.13,12.20,17,None),(.012,'<.005',.06,9,None),(.087,'<.019',.25,14,None)]),
 ('bean-to-bar','bitter',34,[(.078,.008,.74,34,None),(.47,'<.002',1.88,33,None),(10.10,2.96,19.3,34,None),(.013,'<.005',.04,26,None),(.088,'<LOD',.28,25,None)]),
 ('conventional','white',1,[(None,'<.001',None,0,None),(None,'<.002',None,0,None),(.15,None,None,1,.06),(None,'<.005',None,0,None),(.06,None,None,1,.01)]),
 ('conventional','milk',3,[(.052,.01,.12,3,None),(.125,.11,.16,3,None),(3.56,2.92,4.68,3,None),(.010,.007,.011,3,None),(.04,.070,.097,3,None)]),
 ('conventional','semi-bitter',1,[(.049,None,None,1,.001),(.43,None,None,1,.01),(10.7,None,None,1,.1),(.036,None,None,1,.004),(.12,None,None,1,.01)]),
 ('conventional','bitter',1,[(.065,None,None,1,.002),(.46,None,None,1,.01),(13.0,None,None,1,.4),(.043,None,None,1,.002),(.15,None,None,1,.01)])]
def add(table,key,metal,n,mean,minimum,maximum,detected,sd,**extra):
    is_nd=mean is None
    bound=float(str(minimum).replace('<','')) if is_nd and minimum!='<LOD' else lod.get(metal)
    basis='commercial product homogenate as sampled; no dry-matter conversion verified'
    rows.append(dict(id=f'burgon2023-{table}-{key}-{metal}',analyte=metal,n=n,sample_unit='physical commercial food sample',
        n_note='N in the source result column is detected/quantified count as labelled, not the number sampled. Three analytical digestions are not three new food samples.',
        market='Brazil; e-commerce for bean-to-bar, Campinas retail for conventional chocolate',year='2020–2022 bean collection; chocolate purchase calendar date not explicitly separated',
        statistic='source mean and printed concentration range, or single-product mean±analyticalSD' if not is_nd else 'source below-detection report',
        reported=dict(mean=mean,min_text=minimum,max=maximum,sd=sd,source_result_count=detected,unit='mg/kg'),
        value=None if is_nd else mean,lower_bound=0 if is_nd else mean,upper_bound=bound if is_nd else mean,unit='mg/kg',basis=basis,
        locator=f'{table}, PDF page'+{'Table2':'93','Table3':'95','Table4':'98'}[table]+f', {key}, {metal}',
        censoring=('Source reported group mean below a limit, while positive individual maximum/count may coexist; bound applies to that printed summary, not every individual sample.' if is_nd and detected else 'Non-detect is a0–source-limit identification interval, not observed zero.') if is_nd else 'Source printed summary, not recovered uncensored raw mean. Left-censor substitution convention not specified; reported minima/counts and method limits retained.',
        limitations='Master’s dissertation, not an additional journal publication. Parent/form/origin summaries overlap the same products; no replicate expansion or independent study count.',**extra))
for kind,form,n,data in forms:
    key=kind+'-'+form
    for metal,(mean,minimum,maximum,detected,sd) in zip(metals,data):
        add('Table2',key,metal,n,mean,minimum,maximum,detected,sd,form=kind+' '+form+' chocolate',
            analytical_limits_mg_kg=dict(lod=lod[metal],loq=loq[metal]))
    for metal in ['tAs','tHg']:
        # Universal source ND statement explicitly covers all chocolate samples;
        # each form subset is known from Table2, without inventing individual data.
        add('Table2',key,metal,n,None,'<'+str(lod[metal]),None,0,None,form=kind+' '+form+' chocolate',
            derived_scope='Universal ND statement Results PDFpage92 applied to the explicitly sampled Table2 form; not a newly reported raw sample.',
            analytical_limits_mg_kg=dict(lod=lod[metal],loq=loq[metal]))
origins=[
 ('Amazonas',7,[(.145,.03,.74,6),(.170,.03,.54,6),(7.34,.198,12.8,7),(.014,'<.005',.03,5),(.075,'<.019',.28,3)]),
 ('Amapá',2,[(.054,.007,.1,2),(.15,.054,.25,2),(7.17,5.67,8.66,2),(.019,.02,.02,2),(.044,'<.019',.19,2)]),
 ('Bahia',35,[(.046,.01,.18,35),(.39,.03,.92,35),(8.50,1.63,15.7,35),(.012,'<.005',.05,23),(.08,'<.019',.25,25)]),
 ('Espírito-Santo',8,[(.05,.01,.09,5),(.49,'<.002',.94,7),(6.3,.01,11.40,7),(.022,'<.005',.06,7),(.055,'<.019',.23,7)]),
 ('Floresta-Amazônica',2,[(.08,.04,.12,2),(.77,.46,1.07,2),(12.63,7.36,17.9,2),(None,'<.005',.01,1),(.009,'<.019',.02,1)]),
 ('Mata-Atlântica',4,[(.036,.01,.06,4),(.29,.15,.43,4),(7.6,3.6,8.42,4),(.0038,'<.005',.008,2),(.024,'<.019',.06,2)]),
 ('Pará',5,[(.025,'<.001',.1,3),(.60,.01,1.88,4),(10.14,.11,19.3,4),(.011,'<.005',.04,1),(.10,'<.019',.18,3)]),
 ('Rondônia',2,[(.024,.016,.031,2),(.15,'<.002',.15,2),(4.46,2.96,5.96,2),(.015,.01,.02,2),(.11,.08,.14,2)]),
 ('all',65,[(.057,'<LOD',.74,59),(.38,'<LOD',1.88,62),(7.84,.01,19.3,63),(.012,'<LOD',.06,43),(.058,'<LOD',.28,45)])]
for origin,n,data in origins:
    for metal,(mean,minimum,maximum,quantified) in zip(metals,data):
        add('Table3',origin,metal,n,mean,minimum,maximum,quantified,None,form='bean-to-bar chocolates, mixed cocoa-solids recipes',origin=origin,
            analytical_limits_mg_kg=dict(lod=lod[metal],loq=loq[metal]))
    for metal in ['tAs','tHg']:
        add('Table3',origin,metal,n,None,'<'+str(lod[metal]),None,0,None,form='bean-to-bar chocolates, mixed recipes',origin=origin,
            derived_scope='Universal chocolate ND statement Results PDFpage92 applied to known Table3 subset; not individual measurements.')
beans=[
 ('Amazonas',8,[(.68,.52,.89,8),(18.39,15.2,24.8,8),(None,'<.06',.09,1)]),
 ('Bahia',11,[(.056,'<.17',.16,1),(19.76,10.34,28.69,11),(.04,'<.001',.313,3)]),
 ('Pará',2,[(None,'<.17',None,0),(22.38,16.62,28.12,2),(None,'<.06',None,0)]),
 ('Espírito-Santo',2,[(.22,'<.17',.44,2),(16.6,10.2,23,2),(None,'<.06',None,0)]),
 ('all',23,[(.24,'<.17',.89,11),(19.28,10.2,28.69,23),(.010,'<.06',.313,4)])]
for origin,n,data in beans:
    for metal,(mean,minimum,maximum,count) in zip(['Cd','Cu','Pb'],data):
        add('Table4',origin,metal,n,mean,minimum,maximum,count,None,form='cocoa almonds/beans, source preparation unpeeled status not established',origin=origin,
            count_warning='Table4 title/footnote calls N above-tolerable/contaminated count, but Cu values below printed40mg/kg would not support N=all. Do not convert these counts into independently verified legal exceedances.',
            source_limit_conflict='Table4 footnote/rows use CdLOD.171/.17mg/kg, while validation Table1 gives CdLOD.021/LOQ.033 (AsLOD.171). PbTable4uses~.06 vsTable1LOD.057. Preserve conflict; no inferred correction or validated Cd non-detect threshold.')
assert len(rows)==134,len(rows)
conflicts=[
 'White bean-to-bar Co mean.05 exceeds printed maximum.012; preserve both.',
 'Conventional milk-chocolate Se mean.04 is below its printed range.070–.097; preserve both.',
 'Floresta-Amazônica Pb printed mean<.005 coexists with maximum.01 and one source result count; the mean bound is not evidence every sample was ND.',
 'Bean Cd detection limit in Table4 conflicts with analyte-specific validation Table1; Bahia mean/range/limit also conflict.',
 'Table3 regional sample counts differ from Methods: Methods Amazonas9,Bahia38,Rondônia1,Pará4; Table3 Amazonas7,Bahia35,Rondônia2,Pará5 plus FlorestaAmazônica2. Preserve reported table denominators and discrepancy.',
 'Table2 detected and Table3 quantified counts use different labels and differ; do not silently treat them as a single uncensored sample N.',
 'Narrative Pb concentrations and recipe/region averages sometimes conflict with tables; printed table and narrative facts must not be blended into repaired means.']
j=dict(source_id=r['source_id'],artifact=r['resolved_path'],sha256=r['artifact_sha256'],identity_verified=True,completeness_verified=True,extraction_complete=False,rows=rows,
    identity_proof='Vitor Hugo Burgon2023 master’s dissertation,125pages, title/authorship checked; primary metals experiment is chapter with Methods PDFpages86–91, resultsTables2–4 pages93/95/98. DOI is null; not a journal paper.',
    complete_scope='All40 Table2 Cd/Co/Cu/Pb/Se form summaries,45 Table3 region/total summaries,15 Table4 bean-region/total summaries, and34 explicitly derived form/region bounds from universal chocolate As/HgND statement. Analytical validation/OTA food samples are different endpoints and denominators.',
    remaining_extraction=['Audit reported mean-below-limit results and group-mean bounds against their printed sample ranges/counts before final result/reference admission; the current source mean bound for a censored group does not imply all individual products were ND. Route any additional current-experiment narrative statistics and Figure11 overlaps explicitly.'],
    source_conflicts=conflicts,unreported_endpoints='BeansAs was assayed in Methods/validation but no explicit current-study beanAs concentration or universalND statement verified. No As absence or bound invented for beans. Co/Hg/Se bean assay marked not evaluated in validation Table1.',
    source_family='Burgon2023 primary thesis food-metal experiment; reference studies cited in background are not new observations.',
    exposure_context=dict(locator='Exposure Methods PDFpages89–90',consumption_g_day=15.75,body_weights_kg={'adult':60,'child':15},limit='Worst observed chocolate concentrations used in scenarios; do not treat BMDLs as safe intake allowances or derive general safe chocolate servings.'))
(D/'extractions'/(r['source_id']+'.json')).write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Burgon:',len(rows),'printed/derived source result records; reporting-conflict audit remains explicit.')
