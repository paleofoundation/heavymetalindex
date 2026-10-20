#!/usr/bin/env python3
"""Loopback-only review server, including Quartz clean URLs. No writes."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
ROOT = Path(__file__).resolve().parents[2] / 'previews/contracts-pilot'
class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def do_GET(self):
        url = urlsplit(self.path)
        candidate = (ROOT / unquote(url.path).lstrip('/')).resolve()
        if candidate.is_relative_to(ROOT) and not candidate.exists() and candidate.with_suffix('.html').is_file():
            self.path = url.path + '.html'
        return super().do_GET()
ThreadingHTTPServer(('127.0.0.1', 8766), Handler).serve_forever()
