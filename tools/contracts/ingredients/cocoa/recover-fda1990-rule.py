"""Fetch only the29-page FDA rule from the283MB official issue via HTTP ranges."""
from pathlib import Path
import io,json,hashlib,urllib.request,datetime
from pypdf import PdfReader,PdfWriter
ROOT=Path(__file__).resolve().parents[4];P=ROOT/'data/evidence/contracts/cocoa/primary-recovered'
URL='https://www.govinfo.gov/content/pkg/FR-1990-06-20/pdf/FR-1990-06-20.pdf'
CACHE=P/'fda1990-range-cache';CACHE.mkdir(exist_ok=True)
SIZE=283548495;BLOCK=262144
receipt=dict(url=URL,source_size=SIZE,method='Official HTTP206 byte ranges; page mapping from official MODS printPageRange first25071,offset10. Extract relevant printed25204–25232 only.',blocks=[],whole_issue_sha256_verified=False)
def sha(b):return hashlib.sha256(b).hexdigest()
class Remote(io.RawIOBase):
    def __init__(self):self.position=0;self.cached={}
    def seekable(self):return True
    def readable(self):return True
    def tell(self):return self.position
    def seek(self,offset,whence=0):
        self.position=offset if whence==0 else self.position+offset if whence==1 else SIZE+offset
        if self.position<0:raise ValueError('Negative seek')
        return self.position
    def block(self,index):
        if index in self.cached:return self.cached[index]
        start=index*BLOCK;end=min(start+BLOCK,SIZE)-1
        request=urllib.request.Request(URL,headers={'Range':f'bytes={start}-{end}','User-Agent':'Mozilla/5.0'})
        with urllib.request.urlopen(request,timeout=30) as res:
            assert res.status==206,('Server ignored range; abort before downloading full issue',res.status)
            assert res.headers['Content-Range']==f'bytes {start}-{end}/{SIZE}',res.headers
            data=res.read(BLOCK+1)
            assert len(data)==end-start+1,len(data)
        file=CACHE/f'block-{index:05}.bin';file.write_bytes(data);self.cached[index]=data
        receipt['blocks'].append(dict(start=start,end=end,artifact=str(file.relative_to(ROOT)),sha256=sha(data)))
        (P/'fda1990-rule-range-retrieval.json').write_text(json.dumps(receipt,indent=2)+'\n')
        if len(receipt['blocks'])%10==0:print('Retrieved',len(receipt['blocks']),'range blocks',flush=True)
        return data
    def read(self,n=-1):
        if n<0:n=SIZE-self.position
        n=min(n,SIZE-self.position)
        if n<=0:return b''
        out=[]
        while n:
            index=self.position//BLOCK;offset=self.position%BLOCK;data=self.block(index);take=min(n,len(data)-offset)
            out.append(data[offset:offset+take]);self.position+=take;n-=take
        return b''.join(out)
remote=Remote();reader=PdfReader(remote,strict=False)
print('Official issue pages:',len(reader.pages),flush=True)
start=25204-25071+10;end=25232-25071+10
first=reader.pages[start].extract_text() or ''
print('First rule page opening:',first[:350].replace('\n',' '),flush=True)
assert '25204' in first[:1500],('Official MODS offset did not match expected page; no guessed extraction',first[:300])
assert any(t in first.lower() for t in ['skin protectant','diaper rash']),first[:2000]
writer=PdfWriter();texts=[]
for index in range(start,end+1):
    page=reader.pages[index];texts.append(page.extract_text() or '');writer.add_page(page)
    print('Copied printed page',25071+index-10,flush=True)
pdf=P/'fda1990-diaper-rule-extracted.pdf'
with pdf.open('wb') as f:writer.write(f)
text='\f'.join(texts);(P/'fda1990-diaper-rule-extracted.txt').write_text(text)
receipt.update(completed_at=datetime.datetime.now(datetime.timezone.utc).isoformat(),derived_artifact=str(pdf.relative_to(ROOT)),derived_sha256=sha(pdf.read_bytes()),text_sha256=sha(text.encode()),extracted_pdf_pages=29,source_pdf_page_indices=[start,end],printed_page_range=[25204,25232],identity_verified=True,identity_proof='First page printed25204 has matching FDA skin-protectant/diaper-rash proposed-rule title; complete29-page printed span through25232 retained. Derived PDF is an extraction, not a claimed hash match to the entire283MB issue.')
(P/'fda1990-rule-range-retrieval.json').write_text(json.dumps(receipt,indent=2)+'\n')
print('Recovered29-page rule:',receipt['derived_sha256'],'using',len(receipt['blocks']),'blocks.',flush=True)
