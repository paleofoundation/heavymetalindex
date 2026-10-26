from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
import argparse
p=argparse.ArgumentParser();p.add_argument('--port',type=int,default=8769);p.add_argument('--directory');a=p.parse_args()
root=Path(a.directory).resolve() if a.directory else Path(__file__).resolve().parents[4]/'data/evidence/contracts/most-studied-rollout-2026-10-22/fish/preview'
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*args,**kw):super().__init__(*args,directory=str(root),**kw)
 def translate_path(self,url):
  original=Path(super().translate_path(url))
  if original.is_file():return str(original)
  if original.with_suffix('.html').is_file():return str(original.with_suffix('.html'))
  if original.is_dir() and (original/'index.html').is_file():return str(original/'index.html')
  return str(original)
ThreadingHTTPServer(('127.0.0.1',a.port),Handler).serve_forever()
