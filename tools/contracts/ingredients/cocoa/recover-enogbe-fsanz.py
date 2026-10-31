"""Verify the last two owner-listed missing originals against primary contents."""
from pathlib import Path
import json,hashlib
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
raw=D/'primary-recovered';p=raw/'enogbe2025.pdf';t=(raw/'enogbe2025.txt').read_text()
assert '10.54905/disssi.v9i10.e2ijad3057' in t
assert len(t.split('\f'))-1==6
assert all(x in t for x in ['Emmanuel Joy Enogbe','Agbaghare Daniel Enajeme','All data associated with this study are present in the paper.'])
rows=[];metals=['Ni','Fe','Cu','Cr','Pb']
for sample,values in [('A',[1.05,7.01,5,3.5,.2]),('B',[.91,5.95,5.02,4.66,.29])]:
    for metal,value in zip(metals,values):
        rows.append(dict(id=f'enogbe2025-{sample}-{metal}',analyte=metal,form='anonymous chocolate product; recipe and cocoa percentage unspecified',market='Bwari market, Abuja FCT, Nigeria',origin='cocoa-growing origin not reported',year='collection date not reported',n=1,sample_unit='one source anonymous commercial chocolate product',n_note='Two brands purchased; lot count and analytical replicate count unreported. No national representativeness.',statistic='source individual product concentration',value=value,lower_bound=value,upper_bound=value,unit='mg/kg',basis='as-sampled chocolate mass; no dry-matter correction reported',locator=f'Table 1, PDF page 3, sample {sample}, {metal}',method='0.2 g sample, 2 mL HNO3/H2O2 1:1 microwave-assisted digestion, final 10 mL, flame AAS Alpha 4; Methods PDF page 2.',censoring='Positive source result; no numerical LOD/LOQ, recovery or precision verification supplied.',limitations='Total chromium is not chromium(VI). Small product comparison cannot identify growing origin, source attribution or market prevalence.'))
for metal,mean,disp in zip(metals,[.98,6.48,5.01,4.08,.24],[.05,.37,.03,.41,.12]):
    rows.append(dict(id=f'enogbe2025-mean-{metal}',analyte=metal,form='two anonymous chocolate products, source pooled summary',market='Bwari market, Abuja FCT, Nigeria',year='collection date not reported',n=2,sample_unit='two reported product values',statistic='source printed mean ±unspecified dispersion',reported=dict(mean=mean,plus_minus=disp,unit='mg/kg'),value=mean,lower_bound=mean,upper_bound=mean,unit='mg/kg',basis='same as-sampled chocolate mass as individual results',locator=f'Table 1, PDF page 3, Mean conc., {metal}',censoring='No substitution convention stated; quantification limits unknown.',limitations='Printed dispersion is not identified or reproducible as a standard error/SD of the two product values; preserve rather than repair. Summary overlaps both individual product rows and is not a third sample.'))
exposure=[]
vals={'child':{'A':[.00105,.00701,.005,.0035,.0002],'B':[.00091,.00595,.00502,.00466,.00029],'Mean':[.000653,.00432,.00334,.00272,.000163]},'adult':{'A':[.0015,.010014,.007143,.005,.000286],'B':[.0013,.0085,.007171,.006657,.000414],'Mean':[.000933,.006171,.004771,.003886,.000233]}}
for group,groups in vals.items():
    for sample,values in groups.items():
        for metal,value in zip(metals,values):
            exposure.append(dict(group=group,sample=sample,analyte=metal,value=value,
                unit_as_printed='mg/kg',dimensional_interpretation='mg/kg body weight/day from the stated formula, not concentration in food',
                locator=f'Table 2, PDF page 3, {group}, sample {sample}, {metal}',
                validation='Source printed model output, unvalidated; mean rows do not equal the arithmetic means of A/B. Do not repair by assumption.'))
obj=dict(source_id='enogbe2025-bwari-chocolate-metals',artifact=str(p),sha256=hashlib.sha256(p.read_bytes()).hexdigest(),identity_verified=True,completeness_verified=True,identity_proof='Publisher original, exact title/authors/DOI, six pages including Methods, Tables 1–3, Figures 1–2, conclusion, data-availability statement and references.',extraction_complete=True,rows=rows,exposure_context=exposure,
    complete_scope='All ten individual product/analyte values and all five printed concentration mean/dispersion summaries. Figures repeat Tables 1/2. Thirty Table 2 exposure model values retained separately; Table 3 WHO-labelled values and other papers are secondary comparisons, not new occurrence.',
    exposure_assumptions=dict(child_food_kg_day=.02,child_body_weight_kg=20,adult_food_kg_day=.1,adult_body_weight_kg=70),
    source_conflicts=['Table 3 labels unsupported WHO food limits; its Cu and Cr entries would not support the blanket conclusion even on their own terms. No independent current legal or safety claim adopted.','Abstract/conclusion claim no risk from two products without adequate exposure/toxicology support.','Intake narrative uses g/day while formula implies mg/kg body weight/day; Table 2 mean rows inconsistent with two products.','Dispersion of concentration means is undefined and inconsistent with two-product variability.'])
(D/'extractions/enogbe2025-bwari-chocolate-metals.json').write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n')
p=raw/'fsanz2024-schedule19.pdf';assert hashlib.sha256(p.read_bytes()).hexdigest()=='461834727d16d4343be740b9690b211773eac186fbafb07760712c09933a79d9'
t=(raw/'fsanz2024-schedule19.txt').read_text();assert 'F2024C00908' in t and 'Chocolate and cocoa products' in t
decisions_path=D/'content-dispositions.json';j=json.loads(decisions_path.read_text());j['decisions']['fsanz2024-schedule-19-contaminants']=dict(disposition='exposure_or_regulatory_used',artifact=str(p),sha256=hashlib.sha256(p.read_bytes()).hexdigest(),locator='S19—3, PDF pages 1–2; S19—4 cadmium table, PDF page 2, Chocolate and cocoa products; authorised version footer throughout',identity_proof='Official Federal Register archived PDF, F2024C00908 registered 21 October 2024; SHA256 exactly matches canonical source record.',rationale='Legal contaminant schedule, not an occurrence study. The archived Cd maximum for chocolate/cocoa products is .5 mg/kg with S19—3 consumed-portion and pre-drying basis rules. Supplies versioned regulatory context, no measured cocoa sample or HMI threshold.',regulatory_context=dict(analyte='Cd',matrix='Chocolate and cocoa products',value=.5,unit='mg/kg',version='F2024C00908, 13 September 2024',current_law_status='Archived version identity verified; no assertion that this compilation remains current after its listed 31 August 2026 interval. Verify latest instrument before any current-law public claim.'))
decisions_path.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
proposals_path=raw/'source-access-proposals.json'
proposals=json.loads(proposals_path.read_text()) if proposals_path.exists() else dict(scope='Cocoa-owned recovered primary access paths; shared resolver additions owned by central.',sources={})
proposals['sources'].update({'enogbe2025-bwari-chocolate-metals':[str((raw/'enogbe2025.pdf').resolve())],'fsanz2024-schedule-19-contaminants':[str((raw/'fsanz2024-schedule19.pdf').resolve())]})
proposals_path.write_text(json.dumps(proposals,indent=2)+'\n')
print('Enogbe:',len(rows),'concentrations and',len(exposure),'model outputs; FSANZ archived original exact hash verified.')
