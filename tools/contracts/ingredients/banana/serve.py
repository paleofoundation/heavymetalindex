#!/usr/bin/env python3
"""Loopback-only scoped Banana review server with Quartz clean URL support."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
ROOT = Path(__file__).resolve().parents[4] / 'data/evidence/contracts/ingredient-rollout-2026-10-22/banana/preview'
class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def translate_path(self, path):
        candidate = Path(super().translate_path(path))
        if candidate.is_relative_to(ROOT) and not candidate.exists() and candidate.with_suffix('.html').is_file():
            return str(candidate.with_suffix('.html'))
        return str(candidate)
if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1',8921),Handler).serve_forever()
