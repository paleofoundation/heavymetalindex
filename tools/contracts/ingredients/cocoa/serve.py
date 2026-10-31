from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,unquote
from functools import partial
ROOT=Path(__file__).resolve().parents[4]/'data/evidence/contracts/most-studied-rollout-2026-10-22/cocoa/preview'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,path):
  p=Path(super().translate_path(path))
  if not p.exists() and p.suffix!='.html' and p.with_suffix('.html').is_file():return str(p.with_suffix('.html'))
  return str(p)
print('Cocoa preview: http://127.0.0.1:8795/ingredients/cocoa.html',flush=True)
ThreadingHTTPServer(('127.0.0.1',8795),partial(Handler,directory=str(ROOT))).serve_forever()
