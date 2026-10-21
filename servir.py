"""Servidor local do pacote Web. Compatível com Python 3 no Windows e Linux."""
import argparse
import functools
import http.server
import pathlib
import threading
import webbrowser

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=8080)
parser.add_argument('--no-browser', action='store_true')
options = parser.parse_args()
root = pathlib.Path(__file__).resolve().parent
if not (root / 'index.html').is_file():
    parser.error('Coloque este arquivo dentro da pasta do pacote Web, junto de index.html.')

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map,
                      '.wasm': 'application/wasm', '.js': 'application/javascript'}

server = http.server.ThreadingHTTPServer(('127.0.0.1', options.port),
    functools.partial(Handler, directory=str(root)))
url = f'http://127.0.0.1:{options.port}/'
print(f'NullStack Viamão: {url}\nDeixe este terminal aberto. Ctrl+C encerra.', flush=True)
if not options.no_browser:
    threading.Timer(1, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
