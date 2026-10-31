"""Read all 14 marked edible-seed results in Bravo Figure 6.

Coordinates refer to the immutable source image. Resolution bounds are not CIs.
"""
from pathlib import Path
import hashlib, json, math
import numpy as np
from PIL import Image
ROOT=Path(__file__).resolve().parents[4]
D=ROOT/'data/evidence/contracts/cocoa'
record=next(r for r in json.loads((D/'review-index.json').read_text())['records'] if r['source_id'].startswith('bravo2024'))
image=Path(record['resolved_path']).parent/'_page_13_Figure_2.jpeg'
a=np.array(Image.open(image).convert('RGB'))
mask=(a[:,:,0]>180)&(a[:,:,1]<90)&(a[:,:,2]<90)
# Exclude the legend. This primary picture has concentration points y>450.
mask[:450]=False;mask[:,:180]=False
seen=set();components=[]
for y,x in zip(*np.where(mask)):
    if (y,x) in seen:continue
    q=[(y,x)];seen.add((y,x));pixels=[]
    while q:
        v=q.pop();pixels.append(v)
        for dy,dx in [(1,0),(-1,0),(0,1),(0,-1)]:
            yy,xx=v[0]+dy,v[1]+dx
            if 0<=yy<mask.shape[0] and 0<=xx<mask.shape[1] and mask[yy,xx] and (yy,xx) not in seen:
                seen.add((yy,xx));q.append((yy,xx))
    if len(pixels)>10:
        components.append((float(np.mean([p[1] for p in pixels])),float(np.mean([p[0] for p in pixels]))))
assert len(components)==14,len(components)
p=D/'extractions'/f"{record['source_id']}.json"
j=json.loads(p.read_text());j['rows']=[r for r in j['rows'] if not r['id'].startswith('bravo2024-Cd-seed-figure6-')]
for index,(x,y) in enumerate(sorted(components),1):
    # Independently inspected log ticks: 100 at y58, 10 at y274,
    # 1 at y489, .1 at y705. Half-pixel tick ambiguity + marker uncertainty
    # is conservatively covered by ±4 pixels.
    val=10**((489-y)/215.5)
    lo=10**((489-y-4)/215.5);hi=10**((489-y+4)/215.5)
    j['rows'].append(dict(id=f'bravo2024-Cd-seed-figure6-{index:02}',analyte='Cd',
        form='oven-dried cacao seed farm composite',origin='Arauca, Colombia',n=1,
        n_note='One of 14 sampled farm seed composites. Graphic point ordinal is a locator, not an inferred printed farm ID.',
        statistic='graphical individual seed-composite concentration',value=None,lower_bound=lo,upper_bound=hi,
        reported=dict(graphical_estimate=val,pixel_centroid=[x,y],resolution_pixels=4),unit='mg/kg',
        basis='dry-matter seed analytical basis as source Discussion; no fresh-weight conversion',
        locator=f'Figure 6, converted page 13, red seed marker {index} from left (x={x:.2f},y={y:.2f})',
        graphical_extraction='Log10 axis calibrated from 100/10/1/.1 mg/kg ticks; ±4-pixel reading interval, not a confidence interval. No exact numeric raw value or integer farm identifier invented.',
        overlap='Same 14 seed composites summarized in Table 3 and municipality means; not 14 new farms in addition to those summaries.',
        censoring='Positive plotted result; source Cd LOD .005 and LOQ .043 mg/kg.'))
j['extraction_complete']=True;j.pop('remaining_extraction',None)
j['figure_assessment']=dict(artifact=str(image),sha256=hashlib.sha256(image.read_bytes()).hexdigest(),
    locator='Figure 6, converted page 13',content='Fourteen red cacao-seed points now retained with readable-resolution intervals. Other markers are soil, litter and irrigation-water context. Figure caption describes a chain sketch, while supplied figure plots farm concentrations; preserve the actual primary picture and do not infer powder measurements absent from it.')
j['complete_scope']+=' All 14 individual red seed markers in Figure 6 are retained with graphical resolution bounds; not additional independent samples.'
p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Bravo:',len(j['rows']),'results including all 14 graphical seed composites.')
