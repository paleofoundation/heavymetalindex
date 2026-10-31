"""All provinces × techniques × analytes; preserve source estimator conflicts."""
from pathlib import Path
import json,hashlib
import numpy as np
from PIL import Image
ROOT=Path(__file__).resolve().parents[4];D=ROOT/'data/evidence/contracts/cocoa'
p=D/'extractions/romero-estevez2019-ecuador-cocoa-cd-ni-pb.json';j=json.loads(p.read_text())
centers=[236,322,408,494,580,665,751,837,923,1008,1094,1180,1266,1352,1437,1523,1609,1695]
provinces=['Azuay','Bolívar','El Oro','Esmeraldas','Guayas','Los Ríos','Manabí','Napo','Santo Domingo']
metadata={'Azuay':['Nacional',72,72],'Bolívar':['Nacional ETT103/95',120,62],'El Oro':['Nacional',120,50],'Esmeraldas':['Blend: Criollo, Nacional, Forastero and source-printed Frinitario',108,216],'Guayas':['CCN51',120,144],'Los Ríos':['CCN51',120,96],'Manabí':['Criollo/Nacional',120,120],'Napo':['Nacional',120,40],'Santo Domingo':['Nacional',96,96]}
# Very thin boxes have no coloured interior after the thick black central line.
# These manually inspected source pixel positions carry ±5-pixel bounds.
fallback={(23,12):812,(23,17):887,(24,3):941,(24,4):685,(24,5):755,(24,9):746,(24,10):733,(25,3):787,(25,15):940}
outliers={(23,4):[837],(23,6):[534],(23,16):[917],(24,4):[615,678],(25,4):[370],(25,12):[538],(25,16):[539]}
rows=[];artifacts=[]
for number,metal,zero,scale in [(23,'Cd',1099.5,2/1053.5),(24,'Ni',1099.5,2/234),(25,'Pb',1176,0.5/210.25)]:
    image=D/f'primary-review-images/romero-estevez2019-{number}.png'
    a=np.array(Image.open(image).convert('RGB'));black=(a<60).all(axis=2)
    artifacts.append(dict(artifact=str(image),sha256=hashlib.sha256(image.read_bytes()).hexdigest()))
    for i,c in enumerate(centers):
        technique='FAAS' if i%2==0 else 'GFAAS';province=provinces[i//2]
        color=((a[:,:,0]<70)&(a[:,:,1]>120)&(a[:,:,2]>120)) if i%2==0 else ((a[:,:,0]>100)&(a[:,:,1]<60)&(a[:,:,2]>70))
        yy=np.where(color[:,c-24:c+25].sum(axis=1)>20)[0];yy=yy[(yy>10)&(yy<int(zero+10))]
        if len(yy):
            top,bot=int(min(yy)),int(max(yy));start=top-4
            ys=np.where(black[start:bot+5,c-27:c+28].sum(axis=1)>45)[0]+start
            segments=[]
            for y in ys:
                if not segments or y>segments[-1][-1]+1:segments.append([int(y)])
                else:segments[-1].append(int(y))
            longest=max(map(len,segments));best=[s for s in segments if len(s)==longest]
            center_low=min(min(s) for s in best);center_high=max(max(s) for s in best)
            box_pixels=[top,bot];method='Thickest horizontal black line within each coloured box, visually checked against source plot.'
        else:
            assert (number,i) in fallback,(number,i)
            y=fallback[number,i];center_low=y-2;center_high=y+2;box_pixels=None
            method='Very thin source box; manually inspected central-line pixel position, not an exact recovered measurement.'
        def bounds(y0,y1=None):
            y1=y0 if y1 is None else y1
            return [max(0,(zero-max(y0,y1)-5)*scale),max(0,(zero-min(y0,y1)+5)*scale)]
        central=bounds(center_low,center_high)
        loc=f'Figure {number-22}, PDF page{number}, {province}, {technique}'
        # Caps span roughly32px, vertical/dashed whiskers1px. The box itself
        # is masked out; outlier circles are recorded separately below.
        cap_rows=np.where(black[10:int(zero)-5,c-16:c+17].sum(axis=1)>=24)[0]+10
        cap_rows=cap_rows[(cap_rows<center_low-8)|(cap_rows>center_high+8)]
        if box_pixels is not None:cap_rows=cap_rows[(cap_rows<box_pixels[0]-3)|(cap_rows>box_pixels[1]+3)]
        whiskers=[bounds(int(max(cap_rows))),bounds(int(min(cap_rows)))] if len(cap_rows) else None
        limited=technique=='FAAS' and metal in ['Ni','Pb']
        comparison_bounds=[0,max(7.5,central[1])] if limited else central
        variety,ferment,drying=metadata[province]
        rows.append(dict(id=f'romero2019-{metal}-{province.replace(" ","-")}-{technique}-figure',analyte=metal,
            province=province,origin=province+', Ecuador',cultivar=variety,fermentation_hours=ferment,drying_hours=drying,
            form='fermented/dried/milled cocoa beans',basis='fresh weight, explicitly Methods PDF page7 line141; no conversion to dry weight',
            year='sampling calendar date not verified',n=None,sample_unit='province-linked source material with analytical preparations',
            n_note=f'{6 if technique=="FAAS" else 3} analytical preparations for {technique}, not {6 if technique=="FAAS" else 3} independent field lots. One Table1 province entry; independent lot N unreported.',
            statistic='graphical central concentration; caption mean±RSD conflicts with boxplot artwork',value=None,
            lower_bound=comparison_bounds[0],upper_bound=comparison_bounds[1],unit='mg/kg',
            reported=dict(central_line_graphic_bounds=central,coloured_box_limits_graphic_bounds=bounds(*box_pixels) if box_pixels else None,
                lower_upper_whisker_graphic_bounds=whiskers,individual_outlier_graphic_bounds=[bounds(y) for y in outliers.get((number,i),[])]),
            locator=loc,technique=technique,
            graphical_extraction=dict(artifact=str(image),x_center=c,central_line_pixel_interval=[center_low,center_high],zero_y=zero,mg_kg_per_pixel=scale,reading_pixels=5,method=method),
            censoring='Methods says FAAS Ni/Pb results were below LOQ7.5mg/kg and fortifications used to corroborate content. Use broad0–at-least7.5mg/kg identification interval, not a validated exact concentration. Esmeraldas Ni artwork exceeds that limit, an unresolved text/figure conflict.' if limited else f'Source {technique} LOQ '+str(j['analytical_limits_mg_kg'][technique][metal])+'mg/kg; graphic reading interval is not analytical uncertainty.',
            reference_admission=dict(eligible=False,scientific_reason='Caption/artwork statistic contradiction prevents identifying the central line as a verified subgroup median. Analytical replication does not establish independent growing lots.'+(' Below-LOQ/fortification uncertainty additionally prevents exact quantified FAAS Ni/Pb reference admission.' if limited else ''),locator=loc),
            limitations='Same nine province materials and81 analytical preparations as printed tables,243 analyte observations; techniques/plots are not new field samples. Graphical central lines are not silently recast as exact means, medians or population estimates.'))
assert len(rows)==54
j['figure_results']=rows;j['figure_artifacts']=artifacts
for r in j['rows']:
    r['basis']='fresh weight, explicitly Methods PDF page7 line141; fermented/dried analytical material, no conversion to dry weight'
    r.setdefault('n_note','Source province-linked analytical material; independent field-lot count unreported.81 analytical preparations generate243 analyte observations across three metals, not243 growing lots.')
j['extraction_complete']=True;j.pop('remaining_extraction',None)
j['complete_scope']='All24 printed current-study concentration/mean/range records and all54 province×technique×analyte graphical results, including displayed outliers, source statistics conflicts and FAAS identification bounds. Historical comparison columns in Table2 refer to Mite2010/AGROCALIDAD2012, not new2019 measurements; Figure4 regression/correlation repeats same observations.'
p.write_text(json.dumps(j,ensure_ascii=False,indent=2)+'\n')
print('Romero:54 graphical province/technique/analyte results; all78 concentration records retained with explicit estimator/LOQ limits.')
