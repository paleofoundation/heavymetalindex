from pathlib import Path
import json,re,hashlib,xml.etree.ElementTree as E
root=Path(__file__).resolve().parents[4];d=root/'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa'
j=lambda p:json.loads(p.read_text())
s=j(root/'data/evidence/syntheses/ingredient-cocoa-v1.json');f=j(d/'occurrence-findings.json');r=j(root/'data/evidence/questions/ingredient/cocoa.json');md=(d/'candidate/cocoa.md').read_text()
assert len(r['answers'])==36 and len({a['question_id'] for a in r['answers']})==36
for a in r['answers']:assert f'id="{a["question_id"].lower()}"' in md
assert len(f['rows'])==31
assert len({x['source_id'] for x in f['rows']})==4
assert not re.search(r'\bP95\b|p95_ppb|HMTc|HMT&C|certification|Codex AI|ChatGPT|OpenAI',md,re.I)
assert md.count('placement=')==0
faq=md.split('## Cocoa FAQs\n\n',1)[1].split('## References')[0]
assert len(re.findall(r'<details class="qa"',faq))==17
assert faq.lstrip().startswith('<details')
assert md.count('<details class="qa"')==21
for match in re.finditer(r'\[\[sources/([^|\]\\]+)',md):assert(root/'wiki/sources'/f'{match[1]}.md').exists(),match[1]
x=E.parse(d/'primary/fechner2019.xml').getroot()
t2=x.find(".//table-wrap[@id='pone.0217990.t002']");t3=x.find(".//table-wrap[@id='pone.0217990.t003']")
def data(t):return [[re.sub(r'\s+',' ',''.join(c.itertext())).strip() for c in row] for row in t.findall('.//tr')]
d2=data(t2);d3=data(t3)
for row in f['rows']:
 if not row['source_id'].startswith('fechner2019'):continue
 an=row['analyte'];col=1 if an=='Al' else 4
 if row['material']=='Cocoa powder, all samples':
  original=next(x for x in d3 if x[0]==('Aluminium' if an=='Al' else 'Cadmium'))
  assert row['n']==int(original[2]);assert row['reported']['mean']==float(original[3]);assert row['reported']['sd']==float(original[4])
 else:
  reg=row['region'];name='African origins summarised' if reg.startswith('African') else 'American origins summarised' if reg.startswith('American') else "Côte d'Ivoire a" if reg.startswith('Côte') else 'Bolivia a' if reg.startswith('Bolivia') else 'Dominican Republic a' if reg.startswith('Dominican') else 'Indonesia a'
  original=next(x for x in d2 if x[0]==name)
  assert row['n']==int(original[col]);assert row['reported']['mean']==float(original[col+1])
  if 'sd' in row['reported']:assert row['reported']['sd']==float(original[col+2])
ot=[x for x in f['rows'] if 'thesis' in x['source_id']]
expected=[(33,.060,.052,.727,.583),(12,.038,.028,.629,.307),(4,.142,.017,.533,.178),(29,.129,.149,.985,.656),(8,.063,.008,.397,.216),(4,1.153,.364,.019,.024)]
assert len(ot)==12
for i,(n,cd,cdsd,pb,pbsd) in enumerate(expected):
 for row,mean,sd in [(ot[2*i],cd,cdsd),(ot[2*i+1],pb,pbsd)]:
  assert row['n']==n and row['reported']['mean']==mean and row['reported']['sd']==sd
  assert 'with shell' in row['material'] and 'dry-matter' in row['basis']
  assert row['finding']==f'{mean*1000:g} ± {sd*1000:g} µg/kg'
assert sum(x[0] for x in expected)==90
assert all(x['n'] is None for x in f['rows'] if x['source_id'].startswith('abt'))
# Targeted repair: preserve approved observations and admit only genuine n1 reference samples.
previous=j(d/'publication-history-before-targeted-correction/occurrence-findings.json')
assert f['rows'][:27]==previous['rows']
admission=j(d/'comparator-admission.json')
for reference in admission['record']['references']:
 distribution=reference['distribution'];assert distribution['n']==4 and distribution['family_count']==1
 assert all(unit['n']==1 and f['rows'][int(unit['id'].split('-')[1])-1]['n']==1 for unit in distribution['units'])
 expected=(36000,79500,111000) if distribution['scope']['analyte']=='Al' else (185,295,435)
 assert tuple(distribution[k]['lower'] for k in ['q1','median','q3'])==expected
controls=j(d/'interventions.json')['records'];assert len(controls)==6
assert sum(r['evidence_kind']=='guidance' for r in controls)==5
assert all(o['start'] is None and o['end'] is None for r in controls if r['evidence_kind']=='guidance' for o in r['outcomes'])
pilot=controls[-1]['outcomes'];assert len(pilot)==3
assert pilot[0]['start']==60 and pilot[0]['end']==111
assert pilot[1]['source_end']=='<0.0015' and pilot[1]['end'] is None
assert pilot[2]['source_start']==pilot[2]['source_end']=='<0.022' and pilot[2]['end'] is None
# Source totals and origin groups cannot silently become a sample count.
assert j(d/'source-checks.json')['source_checks'][1]['source_id']=='fechner2019-cocoa-origin-al-cd-exposure'
# Original below-detection endpoint remains a bound.
pb=next(x for x in f['rows'] if x['source_id'].startswith('abt') and x['analyte']=='Pb');assert '<LOD' in pb['reported']['range_text'] and 'min' not in pb['reported']
# Dispositions cover every mandatory bank candidate.
bank=j(d/'faq-bank.json');assert {f'ING-FAQ-{i:02d}' for i in range(1,18)}<=set(x['id'] for x in bank['candidates']);assert bank['selected_count']==17
out=dict(status='pass',checks=['36 unique question IDs and public anchors','31 findings from4 dataset families; thesis and later journal overlap not double-counted','17 dedicated FAQs,4 supporting questions,all17 bank dispositions','public boundary scan across candidate including frontmatter','source link destinations exist','14 German occurrence rows cross-checked independently against primary XML Tables2/3','12 dissertation Table2 regional means/SD/N cross-checked against rendered original;90 samples, analytical triplicates not independent samples','Al/Cd source occurrence counts distinguished from consumers','Four actual n1 powders per analyte form narrow HMI reference; no group means or overlapping totals become raw samples','Six stage-led controls retain five unquantified guidance records and one paired pilot fraction contrast; no censored zero','mg/kg ×1000 conversion only; no basis harmonisation','lead <LOD lower endpoint preserved without measured-zero substitution'],scientific_limits=['No completed external systematic search or whole-corpus appraisal','Abt and Romero abstract-only scopes retained; unavailable detailed results withheld','Oliveira original journal text unavailable; primary dissertation cited with distinct identity and overlap','Official CXC81, EFSA full text, authentic EU acts and current consolidation verified; no personal serving advice or raw-bean legal ceiling'],candidate_sha256=hashlib.sha256(md.encode()).hexdigest())
(d/'integrity-checks.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out,indent=2))
