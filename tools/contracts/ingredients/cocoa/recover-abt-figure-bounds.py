"""Preserve all Abt percentage-bin and origin/form summaries as graphic bounds."""
from pathlib import Path
import json,hashlib
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
p=D/'extractions/abt2018-cadmium-lead-cocoa-chocolate-us-market.json';j=json.loads(p.read_text())
rows=[];bins=['20–34%','35–49%','50–64%','65–79%','80–94%','95–100%'];ns=[13,13,19,31,13,37]
for metal,baseline,scale,tops,caps,fig in [
    ('Cd',656,1.6/315,[651,639,635,601,584,492],[647.5,623,614,559,507.5,336.5],1),
    ('Pb',1095,.3/185.5,[1091,1090,1084,1083,1072,1027],[1085,1084,1073.5,1073.5,1054,963],2)]:
    for i,(top,cap) in enumerate(zip(tops,caps)):
        mean=[max(0,(baseline-top-2)*scale),(baseline-top+2)*scale]
        sd=[max(0,(top-cap-4)*scale),(top-cap+4)*scale]
        rows.append(dict(id=f'abt2018-{metal}-percent-bin-{i+1}',analyte=metal,form='source combined cocoa/chocolate products',
            labelled_cocoa_percentage=bins[i],n=ns[i],sample_unit='commercial product',
            n_note='126 products with percentage labels; bins overlap appendix product results and form summaries, not new samples.',
            statistic='graphical source mean ±SD',value=None,lower_bound=mean[0],upper_bound=mean[1],unit='mg/kg',
            reported=dict(mean_graphic_bounds=mean,sd_graphic_bounds=sd),
            basis='source ready-to-eat basis as explicitly Methods; recipes and cocoa forms remain mixed',
            market='United States retail/online convenience sample',year='December2015–January2016',
            locator=f'Figure {fig}, PDF page15, percentage bin {bins[i]}; Table5 group counts',
            graphical_extraction=dict(image='primary-review-images/abt2018-15.png',baseline_y=baseline,mg_kg_per_pixel=scale,bar_top_y=top,sd_cap_y=cap,mean_reading_pixels=2,sd_reading_pixels=4),
            limitations='Graphic-resolution bounds are not confidence intervals. Percent-cocoa association mixes chocolate, powder and nib recipes; it is not an intervention or a fixed prediction for all products. Pb summaries retain the source treatment of below-LOD nib values.'))
# Each tuple is Q1 / median / Q3 / lower whisker / upper whisker in pixels.
# Read with generous pixel uncertainty where low concentrations occupy tiny boxes.
groups=[('dark chocolate','Africa',8),('dark chocolate','Latin America',26),('milk chocolate','Africa',7),('milk chocolate','Latin America',12),('cocoa powder/drink mixes','Africa',6),('cocoa powder/drink mixes','Latin America',13),('cocoa nibs','Latin America',7)]
cd=[(758,756,752.5,760,730),(744,728.5,711.5,760,649),(760,758,756,761,755),(758,756,754,761,735),(760,758,751.5,761,718),(707.5,662.5,579.5,749,486),(725.5,719.5,706.5,734,636)]
pb=[(802.5,796,791.5,810,779),(811,806.5,788.5,817,731),(812,811,810,817,795),(814,812,808.5,817,763),(797,776,750.5,812,708),(747.5,727.5,627.5,795,518),(818,817,813,818.5,809)]
for metal,data,baseline,scale,fig in [('Cd',cd,761.5,3/262,5),('Pb',pb,818.5,1/790,6)]:
    for i,((form,origin,n),coords) in enumerate(zip(groups,data)):
        def bounds(y):return [max(0,(baseline-y-3)*scale),max(0,(baseline-y+3)*scale)]
        q1,med,q3,wlo,whi=[bounds(y) for y in coords]
        if metal=='Pb' and form=='cocoa nibs':
            # Source zero-imputed three below-LOD nibs before plotting. Preserve
            # identification bounds from the actual appendix/Methods instead.
            q1=[0,.0012];med=[.0012,.0109];q3=[.0012,.0109];wlo=[0,.0012];whi=[.0012,.014]
        rows.append(dict(id=f'abt2018-{metal}-origin-form-{i+1}',analyte=metal,form=form,origin=origin,n=n,
            sample_unit='commercial product with source label/website growing-origin information',
            statistic='source graphical boxplot median, quartiles and whiskers',value=None,lower_bound=med[0],upper_bound=med[1],unit='mg/kg',
            reported=dict(median_graphic_bounds=med,q1_graphic_bounds=q1,q3_graphic_bounds=q3,lower_whisker_graphic_bounds=wlo,upper_whisker_graphic_bounds=whi),
            basis='source ready-to-eat basis; no moisture, cocoa-percentage or recipe normalization',market='United States retail/online',year='December2015–January2016',
            locator=f'Figure {fig}, PDF page{18 if metal=="Cd" else 19}, {form} ({origin}), N={n}',
            graphical_extraction=dict(image=f'primary-review-images/abt2018-{18 if metal=="Cd" else 19}.png',baseline_y=baseline,mg_kg_per_pixel=scale,reading_pixels=3,source_pixel_rows=coords),
            censoring='Three source nib Pb non-detects were set to zero by authors for these plots; our nib quartile/median identification bounds retain source LOD.0012 and LOQ.0109mg/kg, never observed zero.' if metal=='Pb' and form=='cocoa nibs' else 'Graphic reading interval, not analytical uncertainty. Very small boxes may overlap zero in graphic resolution without proving metal absence.',
            overlap='Origin groups partition only known-origin subset; same physical appendix products. Nib Latin-America group is all seven nib products, already included in form summary.',
            limitations='Small targeted origin groups and source-declared labels are not representative growing-region surveys or independent origin authentication. Bounds describe readable source artwork, not exact recovered individual data.'))
assert len(rows)==26
j['figure_results']=rows
j.pop('remaining_extraction',None)
j['extraction_complete']=True
j['scatter_figure_assessment']=dict(locator='Figures3–4, PDF pages16–17',content='Both captions explicitly identify the same126 label-percentage products. Their concentration observations are already present in the144-product Cd/Pb appendix; all six percentage-bin concentration summaries and form/origin summaries are retained. The scatter figures do not print product IDs, so exact percentage-to-appendix joins cannot be recovered without guesswork. Overplotted markers are not expanded into invented observations.',reported_associations={'Cd_Spearman':.71,'Pb_Spearman':.52},limits='Mixed-form unadjusted correlations, not causal recipe effects. Missing individual label joins remain unknown metadata; no additional independent study or sample count is created.')
j['figure_artifacts']=[dict(artifact=str(f),sha256=hashlib.sha256(f.read_bytes()).hexdigest()) for f in [D/'primary-review-images/abt2018-15.png',D/'primary-review-images/abt2018-18.png',D/'primary-review-images/abt2018-19.png']]
p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Abt: all 331 concentration records retained; exact individual percentage-to-product joins remain unknown, not invented.')
