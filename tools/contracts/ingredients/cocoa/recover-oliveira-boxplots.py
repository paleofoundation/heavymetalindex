"""Primary thesis medians recovered as reading bounds, not mean substitutions."""
from pathlib import Path
import json,hashlib
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
p=D/'extractions/oliveira2020-thesis-cocoa-cadmium-lead.json';j=json.loads(p.read_text())
origins=[('Bahia',33),('Pará',29),('Côte-d’Ivoire',12),('Rondônia',8),('Espírito-Santo',4),('Ecuador',4)]
# Q1, median, Q3, lower whisker, upper whisker source pixel rows.
cd=[(450,436,427,454,403),(431,425,421,443,408),(455,445,436,455,431),(436,433.5,431,438,429),(410,405,400,411,400),(276,237,196,303,167)]
pb=[(420,406,358,462,266),(406,358,323,429,203),(444,394.5,357,462,343),(413,408,403,418,392),(417.5,405,385,422,376),(462,461,458,463,456)]
def convert(metal,y):
    if metal=='Pb':return max(0,(462-y)*.5/57.3)
    return max(0,(455-y)*.1/35) if y>340 else max(0,1+(260-y)*.5/77)
def bounds(metal,y):return [convert(metal,y+2),convert(metal,y-2)]
rows=[]
for metal,values in [('Cd',cd),('Pb',pb)]:
    for (origin,n),(q1,median,q3,wlo,whi) in zip(origins,values):
        med=bounds(metal,median)
        if metal=='Pb' and origin=='Ecuador':med=[0,.022]
        rows.append(dict(id=f'oliveira2020-beans-{origin}-{metal}-figure-median',family_id=j['family_id'],analyte=metal,form='fermented/dried whole cocoa beans including shells',origin=origin,n=n,
            sample_unit='farm-linked bean batch',n_note='Same90 physical batches as Table2, not additional samples; analytical triplicates do not multiply N.',
            statistic='source boxplot subgroup median with graphical reading bounds',value=None,lower_bound=med[0],upper_bound=med[1],unit='mg/kg',
            reported=dict(median_graphic_bounds=med,q1_graphic_bounds=bounds(metal,q1),q3_graphic_bounds=bounds(metal,q3),lower_whisker_graphic_bounds=bounds(metal,wlo),upper_whisker_graphic_bounds=bounds(metal,whi)),
            basis='fermented/dried beans with shells as sampled, no dry-matter conversion',year='collection date unreported',market='research batches from stated producing regions',
            locator=f'Figure1, thesis PDFpage67 (printed53), panel{ "a" if metal=="Cd" else "b" }, {origin}; Table2 PDFpage66 for N',
            graphical_extraction=dict(image='primary-review-images/oliveira2020-67.png',reading_pixels=2,pixel_rows=[q1,median,q3,wlo,whi],calibration='Pb0 at y462,.5 at y404.7. Cd uses a broken axis:0 at y455,.1 at420,.3 at350; upper section1 at260,1.5 at183. Never interpolate across the axis break.'),
            censoring='EcuadorPb central line is below sourceLOQ.022mg/kg; use0–LOQ identification bounds rather than a plotted/source-imputed zero.' if metal=='Pb' and origin=='Ecuador' else 'Reading bounds are not confidence intervals or exact recovered raw values. Below-limit endpoints/unknown source substitution remain explicit; source Table2 Cd bound has a tenfold typo conflict.',
            limitations='Source boxplot, not a computed median from a mean. Country groups are small and unequal; source batch composition includes shells. Fits only a compatible whole-bean preparation/basis scope; no universal growing-origin recommendation.',
            reference_unit_candidate=dict(eligible=True,reason='Actual source subgroup median recovered as a bounded value; all six regional groups per analyte are disjoint subsets of the90-batch family. Must still assess all other ledger families and overlapping parent/derived records.')))
assert len(rows)==12
j['figure_results']=rows
j['figure_artifacts']=[dict(artifact=str(D/'primary-review-images/oliveira2020-67.png'),sha256=hashlib.sha256((D/'primary-review-images/oliveira2020-67.png').read_bytes()).hexdigest()),dict(artifact=str(D/'primary-review-images/oliveira2020-71.png'),sha256=hashlib.sha256((D/'primary-review-images/oliveira2020-71.png').read_bytes()).hexdigest())]
j['remaining_extraction']=['Route any additional current-experiment narrative maxima or derived percentages as quoted estimator context, rather than duplicating identical measurements. JournalSupplementS1 remains unrecovered; do not assert exact supplement/figure identity without inspecting it.']
j['extraction_complete']=False
j['complete_scope']+=' All12 source subgroup medians, quartiles and whiskers from Figure1 are now retained as bounds; source mass-distributionFigure2 retained in linked controls.'
p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Oliveira thesis:12 true source boxplot median units, all regional groups; no mean-to-median substitution.')
