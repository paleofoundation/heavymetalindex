"""All measured-label and constructed cocoa-powder groups, never four examples."""
from pathlib import Path
import json,hashlib
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
r=next(x for x in json.loads((D/'review-index.json').read_text())['records'] if x['source_id'].startswith('fechner2019'))
assert hashlib.sha256(Path(r['resolved_path']).read_bytes()).hexdigest()==r['artifact_sha256']
groups=[
 ('European origins summarised',129,148,51,128,.19,.12,'parent'),
 ('Austria',1,138,None,1,.14,None,'processing-country label'),
 ('France including Corsica',1,290,None,1,.68,None,'processing-country label'),
 ('Germany',114,148,49,114,.18,.12,'processing-country label'),
 ('Italy',1,122,None,1,.17,None,'processing-country label'),
 ('The Netherlands',6,147,69,6,.15,.04,'processing-country label'),
 ('Poland',1,51,None,1,.13,None,'processing-country label'),
 ('Russian Federation',1,140,None,1,.54,None,'processing-country label'),
 ('Switzerland',2,162,None,2,.25,None,'processing-country label'),
 ('Spain',1,156,None,1,.24,None,'processing-country label'),
 ('United Kingdom',1,166,None,None,None,None,'processing-country label'),
 ('African origins summarised',7,151,45,7,.21,.21,'parent'),
 ('Africa',6,155,47,6,.23,.22,'plausible growing-region label'),
 ('Côte d’Ivoire',1,130,None,1,.08,None,'plausible growing-origin label'),
 ('American origins summarised',4,45,30,4,.44,.11,'parent'),
 ('Bolivia',1,5,None,1,.29,None,'plausible growing-origin label'),
 ('Dominican Republic',1,67,None,1,.57,None,'plausible growing-origin label'),
 ('Peru',2,53,None,2,.45,None,'plausible growing-origin label'),
 ('Indonesia',1,92,None,1,.30,None,'plausible growing-origin label'),
 ('Not specified',26,151,46,26,.17,.07,'no origin declaration')]
rows=[]
for i,(name,an,am,asd,cn,cm,csd,label) in enumerate(groups,1):
    for metal,n,mean,sd in [('Al',an,am,asd),('Cd',cn,cm,csd)]:
        if n is None:continue
        rows.append(dict(id=f'fechner2019-table2-{i:02}-{metal}',analyte=metal,form='commercial cocoa powder, mixed stated fat-reduction classes',
            market='German Food Monitoring purchase market',origin_label=name,origin_type=label,
            year='2008 and2012 analyses, within requested2005–2015 monitoring window',
            n=n,sample_unit='tested cocoa-powder sample',n_note='Each n1 country row is one quantified physical sample. Parent continent groups overlap country rows; all167Al/166Cd samples overlap Table3 totals.',
            reported=dict(mean=mean,sd=sd,unit='mg/kg'),statistic='single quantified sample result (source mean with n1)' if n==1 else 'source group arithmetic mean ±SD when available',
            value=mean,lower_bound=mean,upper_bound=mean,unit='mg/kg',basis='cocoa powder as tested; no verified dry-matter normalization or fat harmonization',
            locator=f'Table2, PDF page8, {name}, {metal}',censoring='Source explicitly states all analysed cocoa-powder Al/Cd concentrations quantifiable.',
            method='GFAAS or ICP-MS, German monitoring codes el-450401, Al ss-1813000 / Cd ss-1848000.',
            limitations='Processing/packaging-country labels are not growing origins. That labelling limitation does not invalidate the actual powder concentration. Plausible cultivation labels were checked against FAO production, not independently authenticated. Small groups are not national estimates.',
            reference_unit_candidate=dict(eligible_single_sample=n==1,reason='An uncensored n1 physical sample is a singleton median candidate; all such rows must be assessed, including non-growing-country labels.' if n==1 else 'Source reports mean/SD, no subgroup median or individual underlying distribution. Do not manufacture a median or expand a mean into n raw observations.')))
for metal,overall,groups3 in [
 ('Al',(167,146,52,223),[(1,'A',56,90,28,117),(1,'B',56,199,29,276),(2,'A',42,81,28,110),(2,'B',42,208,29,276)]),
 ('Cd',(166,.19,.13,.53),[(1,'A',55,.12,.02,.14),(1,'B',56,.30,.17,.768),(2,'A',42,.12,.02,.13),(2,'B',42,.34,.19,.68)])]:
    data=[(0,'all',*overall)]+groups3
    for grouping,label,n,mean,sd,p95 in data:
        rows.append(dict(id=f'fechner2019-table3-{metal}-{grouping}-{label}',analyte=metal,form='commercial cocoa powder',
            market='Germany, same monitoring samples as Table2',origin='not inferred; grouping uses sorted concentration values',
            year='2008 and2012 analyses',n=n,sample_unit='tested cocoa-powder sample',
            statistic='source arithmetic mean,SD and95th percentile',reported=dict(mean=mean,sd=sd,p95=p95,unit='mg/kg'),
            value=mean,lower_bound=mean,upper_bound=mean,unit='mg/kg',basis='powder as tested; no moisture/fat conversion',
            group_description='all samples' if grouping==0 else f'Constructed concentration grouping{grouping}, segment{label}',
            locator=f'Table3, PDF page9, {metal}, grouping{grouping}, segment{label}',
            censoring='All samples quantifiable, per table caption.',
            limitations='Theoretical originA/B are concentration-selected low/high segments, not observed geographic origins. Grouping1 uses thirds; grouping2 uses quartile cutoffs. Extreme-group differences are built into selection; no causal origin or mitigation conclusion. Constructed/parent groups overlap original samples and cannot add independent reference units.'))
assert len(rows)==49
counts={m:sum(x['analyte']==m and x.get('reference_unit_candidate',{}).get('eligible_single_sample',False) for x in rows) for m in ['Al','Cd']}
assert counts=={'Al':11,'Cd':10},counts
j=dict(source_id=r['source_id'],artifact=r['resolved_path'],sha256=r['artifact_sha256'],identity_verified=True,completeness_verified=True,extraction_complete=True,rows=rows,
    identity_proof='Complete17-page Fechner etal. PLOS ONE14(6)e0217990, DOI10.1371/journal.pone.0217990; exact authors/title, Methods, Tables1–7, two exposure figures and references.',
    complete_scope='All39 reported Table2 concentration groups including every country/continent/unknown label, and all10 Table3 total/constructed concentration summaries. Table1 is consumption; Tables4–6 are trade-flow quantities; Table7 product-label audit. None is an additional measured cocoa metal result.',
    individual_reference_candidates=counts,
    exposure_context=dict(locator='Table1 PDF page5; Methods pages2–4; Figures1–2 and Results pages5–7',population='NVSII consumers aged14–80; disaggregated food recipes; individual consumption then estimated chronic exposure',consumer_counts=dict(powder=12115,cocoa_mass=3802,combined=12482),consumption_g_day_kg_bw=dict(powder_mean=.023,powder_median=.012,powder_p95=.081,mass_mean=.019,mass_median=.006,mass_p95=.070,combined_mean=.028,combined_median=.014,combined_p95=.098),limits='Theoretical high/low origins test sensitivity to concentration grouping. Cocoa mass consumption is combined with powder consumption while occurrence concentrations come from powder; source-conservative choice, not a measured cocoa-mass concentration or personal serving allowance.'),
    overlap='German monitoring2008/2012 may overlap Stahl/Hessian monitoring since2011. Preserve both reported result sets; adjudicate overlapping subgroup reference membership before independent-family weighting.',
    key_correction='The old four plausible-growing-origin n1-only reference omitted seven additionalAl/six additionalCd n1 powder observations with processing-country labels. All elevenAl/tenCd candidates are now explicit, before wider-family and overlap assessment.')
(D/'extractions'/(r['source_id']+'.json')).write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Fechner2019:',len(rows),'concentration groups; n1 candidates',counts)
