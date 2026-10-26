from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from urllib.parse import urlsplit,unquote
from pathlib import Path
BASE=Path(__file__).resolve().parents[4]
PREVIEW=BASE/'data/evidence/contracts/ingredient-rollout-2026-10-22/avocado/preview'
class Handler(SimpleHTTPRequestHandler):
 def translate_path(self,url):
  route=unquote(urlsplit(url).path).lstrip('/')
  root=BASE/'data/evidence/contracts/ingredient-rollout-2026-10-22/avocado/preview-baseline' if route.startswith('baseline/') else PREVIEW
  if route.startswith('baseline/'):route=route[len('baseline/'):]
  p=(root/route).resolve()
  if not p.is_relative_to(root):return str(root/'__notfound__')
  if not p.exists() and not p.suffix and p.with_suffix('.html').is_file():p=p.with_suffix('.html')
  return str(p)
print('Avocado preview: http://127.0.0.1:8897/ingredients/avocado',flush=True)
ThreadingHTTPServer(('127.0.0.1',8897),Handler).serve_forever()
