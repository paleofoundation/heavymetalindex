"""Retain every leaf/stem mean and maximum; digitize native primary plot images."""
import datetime,hashlib,json,pathlib,statistics
from PIL import Image
b=pathlib.Path('data/evidence/contracts/leafy-greens');i=next(x for x in json.load(open(b/'access-inventory.json'))['items'] if x['source_id'].startswith('sharma2016'));records=[];audit=[]
settings={'Cd':(6,2,[(25,437.5),(475.5,888),(926.5,1339.5)],.04),'Co':(7,200,[(28,468),(510.5,951),(993,1433)],5),'Cu':(8,100,[(25.5,454.5),(500.5,928),(974,1403)],3),'Fe':(9,1000,[(24,458),(500,934),(977,1409)],25),'Pb':(10,.6,[(26,461),(502.5,938),(981,1416)],.015)}
def color(c,code):
 r,g,bl=c
 return r>150 and bl>100 and g<80 if code=='Cd' else g>100 and r<120 and bl<100 if code=='Co' else r>50 and g>50 and bl<70 and abs(r-g)<50 if code=='Cu' else bl>60 and g>50 and bl>r*2 and g>r*2 and abs(g-bl)<60 if code=='Fe' else g>140 and r<100 and bl<140
taxa={1:('Coriander','Coriandrum sativum'),2:('Fenugreek','Trigonella foenum-graecum'),7:('Mint','Mentha spicata'),10:('Spinach','Spinacia oleracea')}
exact_means={('Co',1,'Spinach'):92,('Co',2,'Coriander'):69,('Co',3,'Spinach'):130.67,('Cu',1,'Spinach'):80.33,('Fe',1,'Fenugreek'):612,('Fe',2,'Fenugreek'):618,('Fe',3,'Fenugreek'):740}
for code,(page,maximum,axes,tolerance) in settings.items():
 path=b/f'sharma-p{page}-image0.png';im=Image.open(path).convert('RGB');digest=hashlib.sha256(path.read_bytes()).hexdigest()
 for site,(top,zero) in enumerate(axes,1):
  scale=(zero-top)/maximum
  first,spacing={'Cd':(230,92.3),'Co':(254,89.2),'Cu':(258,88.0),'Fe':(276,87.8),'Pb':(239,90.65)}[code]
  for index,(name,species) in taxa.items():
   cx=round(first+index*spacing);y=round(zero)-4
   assert sum(color(im.getpixel((x,y)),code) for x in range(cx-15,cx+16))>15,(code,site,name,'bar center missing')
   gap=0;bar_y=y
   while y>top:
    filled=sum(color(im.getpixel((x,y)),code) for x in range(cx-15,cx+16))>15
    if filled:bar_y=y;gap=0
    else:gap+=1
    if gap>8:break
    y-=1
   # Marker horizontal edges exceed10 red pixels; select nearest marker above mean bar.
   candidates=[]
   for y in range(round(top)+1,bar_y+8):
    count=sum((lambda c:c[0]>200 and c[1]<120 and c[2]<120)(im.getpixel((x,y))) for x in range(cx-10,cx+11))
    if count>=10:candidates.append(y)
   assert candidates,(code,site,name)
   closest=max(candidates);near=[y for y in candidates if closest-y<21];marker_y=(min(near)+max(near))/2
   assert marker_y<bar_y+5,(code,site,name,marker_y,bar_y)
   audit.append({'analyte':code,'site':site,'material':name,'image':str(path),'image_sha256':digest,'axis_top_value':maximum,'axis_top_y':top,'axis_zero_y':zero,'x_center':cx,'mean_bar_top_y':bar_y,'maximum_marker_y':marker_y,'uncertainty_mg_per_kg':tolerance})
   for statistic,y in [('mean',bar_y),('maximum',marker_y)]:
    estimate=(zero-y)/scale;exact=exact_means.get((code,site,name)) if statistic=='mean' else None
    if exact is not None:assert abs(estimate-exact)<=tolerance,(code,site,name,estimate,exact)
    records.append({'id':f'lg-full-sharma-site{site}-{name.lower()}-{code}-{statistic}','source_id':i['source_id'],'family_id':'sharma-amritsar-three-site-survey','analyte':code,'material':name+' edible leaves and stems','species':species,'form':'distilled-water washed, air-dried then70°C to remove moisture; dried-powder digestion','basis':'Dry weight','origin_or_market':{1:'Groundwater-irrigated fields nearest industrial discharges, Tung-Dhab drain upstreamMahal',2:'Groundwater-irrigated fields15km downstream alongTung-Dhab drain',3:'Municipal-wastewater-irrigated fields southofAmritsar'}[site]+', Punjab, India','year':'Collection year unreported; published2016','statistic':'reported '+statistic+(' from numericResults' if exact is not None else ', digitized primary graph'),'n':3,'n_note':'Methods says edibleparts coded andcollected intriplicate fromfields at eachsite. Fieldplot/plant/composite unit beyond triplicate not specified. Sites differ in wastewater proximity and irrigation source; observational contrasts do not isolate a controlled treatment.','sample_unit':'triplicate collected vegetable samples; fields clustered by site','unit_original':'mg/kg dried material','unit':'µg/kg','value_original':exact if exact is not None else round(estimate,4),'value':exact*1000 if exact is not None else None,'lower_bound':None if exact is not None else max(0,estimate-tolerance)*1000,'upper_bound':None if exact is not None else (estimate+tolerance)*1000,'graphical_estimate_mg_per_kg':estimate,'censoring':'No food-basis detection limits or individual ND flags reported. Approximate graph bounds express readout precision, not experimental confidence or SD. Redmarkers are maxima, not errorbars.','locator':{'artifact':i['artifact']['path'],'sha256':i['artifact']['sha256'],'kind':'cell','location':f'PDFp{page}, Figure{page-4}, site{site}, {name}, {statistic}'+('; matchingnumericResults pp6–7' if exact is not None else '')},'digitization_artifact':'data/evidence/contracts/leafy-greens/sharma-plot-digitization.json','reference_role':'Mean/maximum are distinct source statistics, not subgroup medians or independent sampling families.'})
assert len(records)==120
(b/'sharma-plot-digitization.json').write_text(json.dumps({'method':'Native publisherPDF embeddedimages preserved. Manualblueaxisanchor values verified visually; 12barpositions calibrated fromnativefigure xlabels/spacing;4targetcenters checked againstfilledpixels atbaseline-4pixels. Targetbar tops recovered by filledcolor scan upward allowing8pixel interruptions fromoverlaidbenchmarklines. Redsquaremarker horizontal edges located aboveeachbar. Bounds conservatively cover about2.5–4percent ofeachaxis range, including rastermarker/line placement; no exact rawsample values fabricated. Seven numericmeans independently checked against graphicalbounds.','checks':audit},indent=2)+'\n')
(b/'recovered-sharma-results.json').write_text(json.dumps({'records':records},indent=2)+'\n')
(b/'primary-review-sharma.json').write_text(json.dumps({'source_id':i['source_id'],'reviewed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'artifact':i['artifact'],'identity_verified':True,'completeness_verified':True,'identity_proof':'Complete16-pageSpringerPlus primaryPDF, Sharma/Katnoria/Nagpal title/authors and DOI10.1186/s40064-016-2129-1. Table1p3 defines4leaf/stemfoods; Methodspp3–5 define3sites,triplicates,driedbasis. Figures2–6pp6–10 containall5elements, eachmean andmaximum. SubsequentTables3–4 andFigures7–8 reportANOVA/MPI/hazardmodels, not further elementconcentrations. Conclusion and fullreferences throughp16.','decision':'occurrence_extracted','extraction_complete':True,'result_ids':[r['id'] for r in records],'scope':'All4leafyfoods×3sites×5elements×mean/maximum=120records. Eightnonleafvegetables retain no false leaf-food mapping. NumericResults values replacegraphestimates onlywhen statisticmatches; othernarrative food summaries/benchmarks are not newindependentobservations.','limits':'Graphs boundedinstead ofinventedexacttables. Means andmaxima, not SE. Drybasis. Source riskcalculations/benchmarks not adopted as current legal/safety conclusions; no controlled matchedirrigation intervention.'},indent=2)+'\n');print('Sharma:120 leaf/stem concentration statistics fromall5primarygraphs')
