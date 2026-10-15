#!/usr/bin/env python3
"""Local design proofs, not a standards publisher. Never writes into the cert repo.

Reads explicit, single-variant snapshots; preserves numeric cells and resolves only
parent identity bounds. Does not adjudicate law, set thresholds, or issue a standard.
Run with the bundled Python (ReportLab + pypdf + pdfplumber).
"""
from pathlib import Path
import argparse, csv, hashlib, html, json, re, subprocess
from datetime import date
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph, Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
CERT = ROOT.parent / 'heavymetalcertified'
OUT = ROOT / 'output/pdf'
W,H = A4
M = 43
CW = W-2*M
ACC='#9f2727'; INK='#2b1f24'; BODY='#3f3a3f'; MUTED='#736b6e'; LINE='#e8e1db'; PAPER='#fffdfb'; TINT='#faf4f0'
MAIN=['Pb','Cd','tAs','iAs','tHg','Ni','Al','Cr','Sn']
SPECIES=['MeHg','Cr-VI']
NAMES={'Pb':'Lead','Cd':'Cadmium','tAs':'Total arsenic','iAs':'Inorganic arsenic','tHg':'Total mercury','MeHg':'Methylmercury','Ni':'Nickel','Al':'Aluminium','Cr':'Total chromium','Cr-VI':'Hexavalent chromium','Sn':'Tin'}
JUR={'CN':'China','IL':'Israel','CODEX':'Codex','EU':'European Union','HK':'Hong Kong','PY':'Paraguay','SG':'Singapore','US-CA':'California','JP':'Japan'}
SPEC={
 'olive-oil': {'dir':'cat30-compiled','manifest':'cat30-pages.json','variant':'default','title':'Olive oil','subtitle':'Virgin, refined and pomace oils','category':'CULINARY OILS & FATS','basis':'As placed on market','intro':'A clearer view of the recorded limits, their sources and the distinctions between direct limits, read-across values and parent-bounded species.'},
 'pet-food-fermentation-derived-protein': {'dir':'cat17-compiled','manifest':'cat17-pages.json','variant':'both','title':'Fermentation-derived\nprotein','subtitle':'Precision-fermented, cultured and yeast-biomass ingredients for pet food','category':'PET FOOD INGREDIENTS','basis':'Dry powder, as sold','intro':'A compact schedule for single-cell protein ingredients. The record distinguishes voluntary human-food read-across values from the feed-law context.'}
}
TITLES={
 'regulations/china-gb-2762-2025-contaminants':'China GB 2762-2025',
 'regulations/israel-moh-fcs-2016-heavy-metals-tin-food-guidelines':'Israel FCS heavy-metal guidelines (2016)',
 'regulations/codex-fats-oils-contaminants':'Codex fats and oils standards',
 'regulations/eu-2024-1987-nickel-maximum-levels':'Commission Regulation (EU) 2024/1987',
 'regulations/ca-swrcb-hexavalent-chromium-mcl':'California hexavalent chromium MCL',
 'regulations/eu2023-contaminants-maximum-levels':'Commission Regulation (EU) 2023/915',
 'regulations/eu-2023-915-cadmium':'Commission Regulation (EU) 2023/915',
 'regulations/eu-10-2011-food-contact-plastics-sml':'Commission Regulation (EU) 10/2011',
 'regulations/hong-kong-cap-132v-metallic-contamination':'Hong Kong Cap. 132V',
 'regulations/paraguay-decreto-1335-2019-mercosur-inorganic-contaminants':'Paraguay Decree 1335/2019',
 'regulations/singapore-food-regulations-heavy-metals-2026':'Singapore Food Regulations (2026 record)',
 'regulations/china-gb-2760-2024-food-additives':'China GB 2760-2024'
}

def sha(b): return hashlib.sha256(b).hexdigest()
def clean(s):
 s=html.unescape(str(s or ''))
 return re.sub('[\u2010-\u2015]', '-', s).replace('\u00a0',' ')
def esc(s): return html.escape(clean(s),quote=True).replace('\n','<br/>')
def fmt(v): return f'{v:,.12g}'
def githead(p): return subprocess.check_output(['git','-C',str(p),'rev-parse','HEAD'],text=True).strip()

def snapshot():
 register_path=ROOT/'data/evidence/regulatory_limits.csv'
 raw=register_path.read_bytes()
 reg={r['regulatory_limit_id']:r for r in csv.DictReader(raw.decode().splitlines())}
 snap={'review_date':date.today().isoformat(),'index_commit':githead(ROOT),'cert_commit':githead(CERT),'register_sha256':sha(raw),'documents':{}}
 for slug,sp in SPEC.items():
  record_path=CERT/'data/standards'/sp['dir']/f'{slug}.json'
  rec_bytes=record_path.read_bytes(); rec=json.loads(rec_bytes)
  mfpath=CERT/'data/standards'/sp['manifest']; mbytes=mfpath.read_bytes(); manifest=json.loads(mbytes)
  page=next(p for p in manifest['pages'] if p['slug']==slug)
  # Explicit proof configuration, never silent fallback to first/merged variant.
  cells=rec['variants'][sp['variant']]
  assert set(cells)==set(MAIN+SPECIES), (slug,set(cells))
  selected={}
  for k,c in cells.items():
   rid=c.get('binding_id') or c.get('source_id') or c.get('sovereign_floor',{}).get('id')
   if rid: selected[rid]=reg.get(rid)
   for floor in c.get('feed_floor') or []:
    selected[floor['id']]=reg.get(floor['id'])
  snap['documents'][slug]={'record_path':str(record_path),'record_sha256':sha(rec_bytes),'record':rec,'page':page,'manifest_meta':manifest['_meta'],'manifest_sha256':sha(mbytes),'register_rows':selected,'variant_selected_for_proof':sp['variant'],'manifest_variants':[v['variant'] for v in page['variants']]}
 return snap

def register_fonts():
 for alias,filename in [('Body','Inter-Regular.ttf'),('Title','Lora-Regular.ttf'),('Mono','IBMPlexMono-Regular.ttf'),('MonoMedium','IBMPlexMono-Medium.ttf')]:
  pdfmetrics.registerFont(TTFont(alias,str(CERT/'tools/pdf/fonts'/filename)))

ST={}
def setup_styles():
 for name,font,size,leading,col in [('body','Body',9.6,14.4,BODY),('small','Body',8.25,11.5,MUTED),('tiny','Mono',6.8,9.5,MUTED),('cell','Body',9,12,BODY),('value','MonoMedium',11,14,ACC),('label','MonoMedium',7.1,10,ACC),('head','MonoMedium',7.1,10,'#ffffff'),('source','Body',8.6,11.8,BODY)]:
  ST[name]=ParagraphStyle(name,fontName=font,fontSize=size,leading=leading,textColor=HexColor(col),spaceAfter=0,splitLongWords=True)

def para(s,style='body'):
 return Paragraph(s,ST[style])

class Proof:
 def __init__(self,path,slug,snap):
  self.slug=slug; self.sp=SPEC[slug]; self.doc=snap['documents'][slug]; self.snap=snap
  self.c=canvas.Canvas(str(path),pagesize=A4,pageCompression=1,invariant=1)
  self.c.setTitle(self.sp['title'].replace('\n',' ')+' | HMTc design review')
  self.c.setAuthor('Heavy Metal Tested & Certified - design review')
  self.c.setSubject('Local layout proof from a recorded data snapshot; not an issued or approved standard')
  self.page=0; self.y=0; self.bounds=[]
 def text(self,s,x,y,font='Body',size=10,col=BODY):
  self.c.setFillColor(HexColor(col)); self.c.setFont(font,size); self.c.drawString(x,y,clean(s))
 def p(self,s,style='body',gap=8,x=M,width=CW):
  p=para(s,style); _,height=p.wrap(width,H)
  if self.y-height<62: raise ValueError(f'{self.slug} page{self.page} paragraph overflow {self.y-height}')
  p.drawOn(self.c,x,self.y-height); self.bounds.append((self.page,self.y-height,self.y)); self.y-=height+gap
 def section(self,n,title):
  self.text(n,M,self.y-12,'MonoMedium',8,ACC)
  self.text(title,M+28,self.y-15,'Title',18,INK)
  self.y-=29
 def start(self,title=None):
  if self.page: self.c.showPage()
  self.page+=1
  self.c.setFillColor(HexColor(PAPER)); self.c.rect(0,0,W,H,fill=1,stroke=0)
  self.c.setFillColor(HexColor(ACC)); self.c.rect(M,H-37,30,3,fill=1,stroke=0)
  self.text('HMTc  /  '+self.sp['category'],M+41,H-37,'MonoMedium',7.3,ACC)
  self.c.setStrokeColor(HexColor(LINE)); self.c.line(M,51,W-M,51)
  self.text('DESIGN REVIEW  /  '+self.snap['review_date'],M,36,'Mono',6.8,MUTED)
  self.c.setFont('Mono',6.8); self.c.drawRightString(W-M,36,f'{self.page:02} / 03')
  self.y=H-69
  if title:
   self.text(title,M,self.y-22,'Title',25,INK); self.y-=42
 def table(self,rows,widths,styles=None,header=True,pad=8):
  data=[[para(esc(c),'head' if header and i==0 else 'cell') if not isinstance(c,Paragraph) else c for c in row] for i,row in enumerate(rows)]
  table=Table(data,colWidths=widths,hAlign='LEFT',repeatRows=1 if header else 0)
  commands=[('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),10),('RIGHTPADDING',(0,0),(-1,-1),10),('TOPPADDING',(0,0),(-1,-1),pad),('BOTTOMPADDING',(0,0),(-1,-1),pad),('LINEBELOW',(0,0),(-1,-1),0.5,HexColor(LINE))]
  if header: commands += [('BACKGROUND',(0,0),(-1,0),HexColor(ACC))]
  if styles: commands += styles
  table.setStyle(TableStyle(commands)); _,height=table.wrap(CW,H)
  if self.y-height<63: raise ValueError(f'{self.slug} page{self.page} table overflow {self.y-height:.1f}, height{height:.1f}')
  table.drawOn(self.c,M,self.y-height); self.bounds.append((self.page,self.y-height,self.y)); self.y-=height+12
 def callout(self,label,text):
  inner=CW-24
  p=para(esc(text),'small'); _,ph=p.wrap(inner,H)
  h=ph+39
  if self.y-h<62: raise ValueError('callout overflow')
  self.c.setFillColor(HexColor(TINT)); self.c.rect(M,self.y-h,CW,h,fill=1,stroke=0)
  self.c.setFillColor(HexColor(ACC)); self.c.rect(M,self.y-h,2,h,fill=1,stroke=0)
  self.text(label,M+12,self.y-17,'MonoMedium',7,ACC)
  p.drawOn(self.c,M+12,self.y-29-ph); self.y-=h+12
 def save(self):
  assert self.page==3
  self.c.save()

def cells_for(d): return d['record']['variants'][d['variant_selected_for_proof']]
def numeric(cells,k):
 c=cells[k]
 if c['type']=='subsumed':
  parent=c.get('subsumed_by') or c.get('bounded_by')
  v=cells[parent]['value']
  if c.get('value') is not None: assert c['value']==v
  assert isinstance(v,(int,float))
  return v
 assert isinstance(c.get('value'),(int,float)),k
 return c['value']
def provenance(c):
 return {'gov':'Government limit','read_across':'Read-across','subsumed':'Parent-bound','precautionary':'Precautionary','baseline_screen':'Method-LOQ screen'}[c['type']]
def source_id(c): return c.get('binding_id') or c.get('source_id') or c.get('sovereign_floor',{}).get('id')
def sources(d):
 cells=cells_for(d); refs=[]; links={}
 for k in MAIN+SPECIES:
  c=cells[k]
  if c['type']=='subsumed': c=cells[c['subsumed_by']]
  rid=source_id(c)
  if rid not in links:
   row=d['register_rows'].get(rid)
   page=c.get('binding_instrument') or (row or {}).get('regulation_page')
   if not page and rid.startswith('china_gb2762_2025'): page='regulations/china-gb-2762-2025-contaminants'
   scope=c.get('binding_scope') or c.get('source_scope') or c.get('analog_scope') or c.get('floor_cell',{}).get('analog_scope') or (row or {}).get('product_scope') or 'Scope not populated in the snapshot'
   refs.append({'n':len(refs)+1,'id':rid,'row':row,'page':page,'title':TITLES.get(page,page or rid),'scope':scope,'used':[k]})
   links[rid]=len(refs)
  elif k not in refs[links[rid]-1]['used']: refs[links[rid]-1]['used'].append(k)
 return refs,links

def build(slug,snap):
 d=snap['documents'][slug]; cells=cells_for(d); sp=SPEC[slug]; refs,links=sources(d)
 path=OUT/f'{slug}-design-review.pdf'; pr=Proof(path,slug,snap)
 pr.start()
 title_size=34 if slug=='olive-oil' else 29
 for line in sp['title'].split('\n'):
  pr.text(line,M,pr.y-title_size,'Title',title_size,INK); pr.y-=title_size+4
 pr.y-=11
 pr.p(esc(sp['subtitle']),'body',10)
 meta=[[para('SOURCE VERSION','label'),para('PRODUCT BASIS','label')],
       [para(esc(d['page']['version']),'small'),para(esc(sp['basis']),'small')]]
 pr.table(meta,[CW*.45,CW*.55],header=False,pad=3)
 pr.section('01','Recorded limits')
 pr.p('Ceilings in <font name="Mono">µg/kg (ppb)</font>. Provenance labels describe the supplied record; instrument verification remains a separate gate.','small',9)
 rows=[['ANALYTE','CEILING','PROVENANCE / SOURCE']]
 for k in MAIN:
  c=cells[k]; src=c if c['type']!='subsumed' else cells[c['subsumed_by']]
  ref=links[source_id(src)]
  marker=f'<link href="#ref-{ref}" color="{ACC}">[{ref}]</link>'
  detail=provenance(c)+'  '+marker
  if c['type']=='subsumed': detail=f'Bounded by {c["subsumed_by"]}  '+marker
  if c['type']=='precautionary': detail+=f'<br/><font size="7.8">Source floor: <font name="Mono">{fmt(c["sovereign_floor"]["value"])} µg/kg</font></font>'
  rows.append([para(esc(NAMES[k])+f' <font name="Mono" size="8" color="{MUTED}">{esc(k)}</font>','cell'),para(fmt(numeric(cells,k)),'value'),para(detail,'cell')])
 pr.table(rows,[CW*.405,CW*.19,CW*.405],pad=7)
 pr.section('02','Additional species')
 sr=[['SPECIES','CEILING','RECORD DISPOSITION']]
 for k in SPECIES:
  c=cells[k]; src=c if c['type']!='subsumed' else cells[c['subsumed_by']]
  caption=f'Bounded by {c["subsumed_by"]}' if c['type']=='subsumed' else provenance(c)
  sr.append([f'{NAMES[k]} ({k})',para(fmt(numeric(cells,k)),'value'),para(esc(caption)+f'  <link href="#ref-{links[source_id(src)]}" color="{ACC}">[{links[source_id(src)]}]</link>','cell')])
 pr.table(sr,[CW*.405,CW*.19,CW*.405],pad=7)
 pr.p('All eleven recorded analytes remain visible. A parent-bound ceiling is shown numerically. Assay timing and speciation triggers require the approved testing schedule.','small',7)
 pr.callout('REVIEW COPY', 'Layout proof only. Values are transcribed from the local compiled record; this copy does not approve their legal basis or issue a certification standard.')

 pr.start('Sources behind the schedule')
 pr.p('Reference numbers connect every ceiling to its recorded instrument. Scope is reproduced from source metadata, including read-across analogs. These are source pointers, not a fresh primary-text verification.','body',14)
 rows=[['REF / USED FOR','RECORDED INSTRUMENT AND SCOPE']]
 for r in refs:
  used=', '.join(r['used'])
  title=esc(r['title'])
  url=(r['row'] or {}).get('url')
  if url and re.match(r'https?://',url): title=f'<link href="{html.escape(url,quote=True)}" color="{ACC}">{title}</link>'
  detail=title+'<br/><font color="'+MUTED+'" size="8">'+esc(r['scope'])+'</font>'
  if r['row'] is None: detail+='<br/><font color="'+ACC+'" size="7.5">Anchor ID absent from the current HMI register snapshot.</font>'
  rows.append([para(f'<a name="ref-{r["n"]}"/>[{r["n"]:02}]<br/>'+esc(used),'label'),para(detail,'source')])
 pr.table(rows,[CW*.19,CW*.81],pad=8)
 pr.callout('HOW TO READ PROVENANCE','Government limit, read-across, precautionary choice and parent-bound ceiling are different derivations. Matching a number does not make those derivations interchangeable.')
 pr.p('Source titles with an available URL are clickable. A register URL may lead to an index or secondary host; release checks must establish the actual primary instrument.','small',0)

 pr.start('Basis & review notes')
 if slug=='olive-oil':
  pr.section('03','Basis disclosures')
  pr.p('Two cells use a source basis different from total oil content. The proof keeps those distinctions visible without approving the conversions.','body',11)
  rows=[['ANALYTE','SOURCE BASIS','TREATMENT RECORDED']]
  rows += [
   ['Cr-VI','Drinking water', 'The source is a water concentration ceiling. The record applies a conservative oil-content read-across; its density conversion needs independent review.'],
   ['Al','Specific migration into food', 'The record applies the migration value as a total-content ceiling. It is not direct total-content regulation of olive oil.']]
  pr.table(rows,[CW*.15,CW*.29,CW*.56],pad=9)
  notes=[('The attached export is a different artifact','The supplied landscape web export omits inorganic arsenic from the main schedule and exposes a raw footnote entity. This proof restores the numeric parent-bound display from the record.'),
         ('Source identity still needs reconciliation','The current record names GB 2762-2025 for lead and total chromium, but those exact anchor IDs are absent from the HMI register snapshot used here. The chromium narrative also still mentions the 2022 edition.'),
         ('Version labels disagree','The page manifest calls this version '+d['page']['version']+'. The compiled record carries '+d['record'].get('version','no version')+'. This proof preserves both facts and does not select a new effective version.')]
 else:
  pr.section('03','Feed-law context')
  pr.p('Feed ceilings below are retained as contextual source records. They are not substituted for the HMTc schedule and have not been requalified for this ingredient or normalized across moisture bases in this proof.','body',10)
  rows=[['ANALYTE','RECORDED FEED CEILINGS (µg/kg)','SOURCE SCOPE']]
  for k in MAIN:
   floors=cells[k].get('feed_floor') or []
   if floors:
    vals='; '.join(f'{JUR.get(f["jurisdiction"],f["jurisdiction"])} {fmt(f["value"])}' for f in floors)
    scope='; '.join(dict.fromkeys(f['scope'] for f in floors))
    rows.append([NAMES[k],para('<font name="Mono" size="8">'+esc(vals)+'</font>','cell'),scope])
  pr.table(rows,[CW*.22,CW*.42,CW*.36],pad=7)
  notes=[('The supplied PDF is an older edition','Its inorganic-arsenic value is attributed to Israel read-across. The current record retains the same number as a precautionary choice against an EU source floor. The proof shows the current provenance without changing the ceiling.'),
         ('The variant join is inconsistent','The page manifest requests variant "default" while the record stores "both". This proof explicitly selects "both"; a release generator should reject ambiguous joins instead of silently taking the first variant.'),
         ('One source pointer is unresolved','The mercury record names a GB 2762-2025 anchor that is absent from the HMI register snapshot used for this proof. Source verification and applicability remain open.')]
 for title,body in notes:
  pr.p(esc(title),'label',4); pr.p(esc(body),'small',12)
 pr.section('04','About this proof')
 pr.p('This three-page design sample covers the limit schedule, source map and review notes. It does not reproduce the complete occurrence narrative, jurisdiction matrix or program manual. No certification threshold, DOI, effective date or live download was changed.','small',11)
 url='https://heavymetalcertified.com/standards/'+slug
 pr.p(f'<link href="{url}" color="{ACC}">Open the standard page</link>  ·  Source attribution: Karen Pendergrass; Institute of Contaminant Standards.','small',10)
 pr.p('RECORD SHA-256  '+d['record_sha256'][:32]+'<br/>'+d['record_sha256'][32:]+'<br/>CERT COMMIT  '+snap['cert_commit'][:12]+'  /  SNAPSHOT  '+snap['review_date'],'tiny',0)
 pr.save()
 return path

def verify(path,slug,snap):
 r=PdfReader(path); assert len(r.pages)==3
 text='\n'.join(p.extract_text() for p in r.pages)
 assert '&sup5;' not in text and '\ufffd' not in text
 assert 'DESIGN REVIEW' in text and 'REVIEW COPY' in text
 cells=cells_for(snap['documents'][slug]); t0=r.pages[0].extract_text()
 for k in MAIN+SPECIES:
  assert NAMES[k] in t0,(slug,k,'label absent')
  # Per-row extraction: each value must follow its own analyte before the next.
  start=t0.index(NAMES[k]); stop=min([i for n in NAMES.values() if (i:=t0.find(n,start+len(NAMES[k])))>=0]+[len(t0)])
  assert fmt(numeric(cells,k)) in t0[start:stop],(slug,k,'wrong numeric value')
 import pdfplumber
 with pdfplumber.open(path) as pdf:
  for i,p in enumerate(pdf.pages):
   for word in p.extract_words():
    assert word['x0']>=M-1 and word['x1']<=W-M+1,(slug,i,word)
    assert word['top']>=20 and word['bottom']<=H-24,(slug,i,word)
 links=sum(len(p.get('/Annots',[])) for p in r.pages)
 return {'pdf':str(path),'sha256':sha(path.read_bytes()),'pages':len(r.pages),'numeric_cell_parity':'11/11','text_bounds':'PASS','literal_entities':'PASS','link_annotations':links,'validation_scope':'Snapshot/display parity, not source-law or certification approval'}

def main():
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('--snapshot',type=Path,help='Reuse a saved proof snapshot without reading current standards')
 args=parser.parse_args(); OUT.mkdir(exist_ok=True,parents=True)
 snap=json.loads(args.snapshot.read_text()) if args.snapshot else snapshot()
 snapshot_path=OUT/'standards-design-review-sources.json'
 snapshot_path.write_text(json.dumps(snap,ensure_ascii=False,indent=2)+'\n')
 register_fonts(); setup_styles(); results=[]
 for slug in SPEC:
  path=build(slug,snap); results.append(verify(path,slug,snap))
 (OUT/'standards-design-review-qa.json').write_text(json.dumps(results,indent=2)+'\n')
 print(json.dumps(results,indent=2))
if __name__=='__main__': main()
