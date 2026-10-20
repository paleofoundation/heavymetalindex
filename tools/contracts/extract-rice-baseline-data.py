#!/usr/bin/env python3
"""Reproducible primary-table recovery. No statistical reconstruction or pooling here."""
import csv, hashlib, json, re
from pathlib import Path
from html.parser import HTMLParser
ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / 'raw/manual-fetch/rice-baseline-20261019'
OUT = ROOT / 'data/evidence/contracts/pilot-2026-10-17/rice-depth/baseline-primary-data.json'
class Tables(HTMLParser):
    def __init__(self):
        super().__init__(); self.tables=[]; self.table=None; self.row=None; self.cell=None
    def handle_starttag(self, tag, attrs):
        if tag=='table': self.table=[]
        elif tag=='tr' and self.table is not None: self.row=[]
        elif tag in ('td','th') and self.row is not None: self.cell=[]
    def handle_data(self, text):
        if self.cell is not None: self.cell.append(text)
    def handle_endtag(self, tag):
        if tag in ('td','th') and self.cell is not None:
            self.row.append(' '.join(''.join(self.cell).split())); self.cell=None
        elif tag=='tr' and self.row is not None:
            self.table.append(self.row); self.row=None
        elif tag=='table' and self.table is not None:
            self.tables.append(self.table); self.table=None
inputs=[]
def read(name,url):
    p=RAW/name if not name.startswith('../') else RAW/name
    inputs.append({'file':str(p.resolve().relative_to(ROOT)), 'url':url, 'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
    return p.read_text()
def table(name,url):
    p=Tables();p.feed(read(name,url));return p.tables[0]
records=[];excluded=[]
def add(source,analyte,id,group,lower,upper,locator,**extra):
    assert 0<=lower<=upper
    records.append(dict(source=source,analyte=analyte,id=id,group=group,lower=lower,upper=upper,locator=locator,**extra))
# Myat Soe S3: replicate analyses do not create extra rice samples.
url='https://journals.plos.org/plosone/article/file?id=10.1371%2Fjournal.pone.0283420.s003&type=supplementary'
p=RAW/'myatsoe-s3.pdf';inputs.append({'file':str(p.relative_to(ROOT)),'url':url,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
text=read('myatsoe-s3.txt',url);source='myatsoe2023-myanmar-rice-metals'
columns={'tAs':(0,.0016),'Pb':(1,.0022),'Cd':(2,.00103),'Cr':(3,.018),'Ni':(8,.025)}
area=None;count=0
for line in text.splitlines():
    c=re.sub(r'<\s+', '<',line).split()
    if c and c[0] in ['TK','HTP','DL','KM','KCK']: area=c.pop(0)
    if len(c)!=12 or not c[0].isdigit() or area is None: continue
    count+=1
    for a,(col,loq) in columns.items():
        raw=c[col+1];id=f'{area}:{c[0]}';locator=f'S3 Table, {area}, sample {c[0]}, {a}'
        if raw.startswith('--'):
            excluded.append(dict(source=source,analyte=a,id=id,reason='Replicate confirmation failed; missing, not zero',original=raw));continue
        v=float(re.sub(r'[<()]','',raw))*1000
        lower,upper=(0,loq*1000) if raw.startswith('(') else (0,v) if raw.startswith('<') else (v,v)
        add(source,a,id,area,lower,upper,locator,original=raw,unit='mg/kg',conversion='×1000; dry grain',kind='sample')
assert count==120
for a,n in [('tAs',120),('Pb',115),('Cd',115),('Cr',118),('Ni',119)]: assert sum(r['source']==source and r['analyte']==a for r in records)==n
# Saudi Table 5: one triplicate-analysis mean per physical sample.
source='alrashdi2024-rice-ias-cd-pb-hg-saudi-arabia'
for c in table('alrashdi-table5.html','https://link.springer.com/article/10.1007/s10653-024-02280-0/tables/5'):
    if len(c)!=8 or not c[0].isdigit():continue
    for j,a in enumerate(['tAs','iAs','Cd','Pb','tHg'],3):
        v=float(c[j].split('±')[0].strip())
        add(source,a,c[0],c[1],v,v,f'Table 5, sample {c[0]}, {a}',original=c[j],food=c[2],subset='imported' if int(c[0])<=24 else 'local',unit='µg/kg',conversion='None; ground grain as analysed',kind='sample',analytical_replicates=3)
assert sum(r['source']==source and r['analyte']=='tAs' for r in records)==33
# Regional medians are summary units, never expanded into individual samples.
source='carey2020-global-low-ias-rice-sourcing';country=None;n=None
for c in table('carey-table1.html','https://link.springer.com/article/10.1007/s12403-019-00330-y/tables/1'):
    species=next((a for a in ['DMA','inorg. As'] if a in c),None)
    if not species:continue
    i=c.index(species)
    if species=='DMA':country=c[i-3];n=int(c[i+1])
    v=float(c[i+4]);low,high=(0,3) if v<=3 else (v,v)
    add(source,'iAs' if species=='inorg. As' else 'DMA',country,country,low,high,f'Table 1, {country}, {species}, median',n=n,original=c[i+4],unit='µg/kg',conversion='None; freeze-dried grain',kind='group_median')
assert sum(r['n'] for r in records if r['source']==source and r['analyte']=='iAs')==1093
source='shi2020-rice-grain-cadmium-global-supply-chain'
for c in table('shi-table1.html','https://link.springer.com/article/10.1007/s12403-020-00349-6/tables/1')[1:]:
    assert len(c)==9
    v=float(c[5]);lo,hi=(0,9.8) if v==4.9 else (v,v)
    add(source,'Cd',c[1],c[1],lo,hi,f'Table 1, {c[1]}, median',n=int(c[2]),original=c[5],unit='µg/kg',conversion='None; freeze-dried grain; half-LOD medians restored to 0–9.8 bounds',kind='group_median')
assert sum(r['n'] for r in records if r['source']==source)==2277
# Genotype BLUEs are adjusted estimates; keep separate from measured samples.
source='tran2024-arsenic-cadmium-vietnamese-rice-qtl'
t=read('tran-blues.tsv','https://dataverse.ird.fr/api/access/datafile/44066')
read('tran-dictionary.tsv','https://dataverse.ird.fr/api/access/datafile/44065');read('tran-readme.txt','https://dataverse.ird.fr/api/access/datafile/44069')
for c in csv.DictReader(t.splitlines(),delimiter='\t'):
    for a,col in [('tAs','As'),('Cd','Cd')]:
        id=c['Genotype_ID']+':'+c['Rice type']
        if not c[col]:
            excluded.append(dict(source=source,analyte=a,id=id,reason='Missing deposited BLUE; not zero'));continue
        v=float(c[col])*1000
        add(source,a,id,c['Rice type'],v,v,f'DataSuds BLUEs, {id}, {col}',original=c[col],unit='ppm',conversion='ppm ×1000; air-dried grain',kind='adjusted_genotype')
# FDA full analytical rice table, included once (2012 release is nested in 2013).
source='fda2013-ias-rice-products-sampling'
t=read('../rice-varieties-20261019/fda2013-rice.txt','https://www.fda.gov/files/food/published/Analytical-Results-from-Inorganic-Arsenic-in-Rice-and-Rice-Products-Sampling-(PDF)-May-2013.pdf')
p=RAW.parent/'rice-varieties-20261019/fda2013-rice.pdf';inputs.append({'file':str(p.relative_to(ROOT)),'url':inputs[-1]['url'],'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
t=t[t.index('Full Analytical Results - Rice\n'):];t=t[:t.index('Full Analytical Results - Rice Products')]
categories={'Basmati':53,'Brown':99,'Instant':14,'Jasmine':13,'Parboiled':39,'White, long grain':149,'White, medium grain':91,'White, short grain':23}
counts={k:0 for k in categories}
def fda_value(raw,analyte):
    if '<' in raw:
        nums=re.findall(r'\d+(?:\.\d+)?',raw);return (0,float(nums[0]) if nums else {'tAs':2,'iAs':3,'DMA':3}[analyte])
    if raw.startswith('TR'):
        return (float(re.search(r'\((\d+)\)',raw)[1]),)*2
    return (float(raw),)*2
for line in t.splitlines():
    c=re.split(r'\s{2,}',line.strip())
    if len(c)<8 or c[1] not in categories:continue
    counts[c[1]]+=1;vals=c[-5:];id=c[0];loc=f'Full Analytical Results – Rice, sample {id}'
    total=fda_value(vals[0],'tAs')
    for j,a in enumerate(['tAs','iAs','DMA']):
        raw=vals[j]
        proxy=a!='tAs' and vals[2].startswith('NS')
        lo,hi=(0,total[1]) if proxy else fda_value(raw,a)
        add(source,a,id,c[1],lo,hi,f'{loc}, {a}',original=raw,unit='ppb dry wt',conversion='ppb = µg/kg dry weight',kind='sample',proxy_bounded=proxy,trace_estimate=raw.startswith('TR'))
assert counts==categories,(counts,categories)
assert len({(r['source'],r['analyte'],r['id']) for r in records})==len(records)
result={'version':1,'recovered':'2026-10-19','inputs':inputs,'records':records,'exclusions':excluded,'notes':[
 'Regional table counts sum to 1093 for Carey (article total1180) and 2277 for Shi (article total2270). No missing observations invented; country medians are summary units; count weighting is sensitivity only.',
 'Carey atmospheric-arsenic column withdrawn by correction; excluded entirely. Median <=3 treated as 0–3 because abstract and methods limits differ.',
 'Shi Mauritius Q1=925 conflicts with its range; Q1 is unused. Only verified country medians enter the summary layer. Reported country spelling Cantodia retained.',
 'Alrashdi imported tAs sample mean is 137.4167, versus rounded narrative 140; Table 5 max269 differs from prose223. Original published finding retained; HMI target is calculated separately.',
 'Tran has 184 brown and 181 nonmissing white genotype BLUEs. Three missing white entries are not zeros; laboratory/field replicates are not independent genotypes.',
 'FDA trace estimates retained as estimated reported measurements; no claim of analytical exactness. Non-speciated iAs/DMA is bounded by total As rather than retaining half-total proxy as measurement.',
 'Reference medians and quartiles are calculated by the maintained HMI engine, not by this extractor.'
]}
OUT.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n');print(f'{len(records)} records; {len(excluded)} explicit missing results; {OUT}')
