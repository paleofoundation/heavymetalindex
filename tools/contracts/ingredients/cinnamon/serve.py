#!/usr/bin/env python3
"""Loopback-only scoped Cinnamon review server with Quartz clean URL support."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
ROOT = Path(__file__).resolve().parents[4] / 'data/evidence/contracts/most-studied-rollout-2026-10-22/cinnamon/preview'
class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def translate_path(self, path):
        candidate = Path(super().translate_path(path))
        if candidate.is_relative_to(ROOT) and not candidate.exists() and candidate.with_suffix('.html').is_file():
            return str(candidate.with_suffix('.html'))
        return str(candidate)
if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8786)
    port = parser.parse_args().port
    print(f'Cinnamon candidate preview: http://127.0.0.1:{port}/ingredients/cinnamon', flush=True)
    ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
