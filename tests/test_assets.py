import os
import glob
import pytest
from bs4 import BeautifulSoup

DOCS_DIR = os.path.join(os.path.dirname(__file__), '..', 'docs')
HTML_FILES = glob.glob(os.path.join(DOCS_DIR, '*.html'))

def is_local(url: str) -> bool:
    if not url or url.startswith(('http://', 'https://', 'mailto:', 'tel:', '#', 'javascript:')):
        return False
    return True

@pytest.mark.parametrize('html_file', HTML_FILES)
def test_assets_exist(html_file):
    with open(html_file, encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    missing = []

    for tag in soup.find_all(src=True):
        src = tag['src'].split('#')[0].split('?')[0]
        if not is_local(src):
            continue
        path = os.path.join(DOCS_DIR, src)
        if not os.path.exists(path):
            missing.append(src)

    for tag in soup.find_all(href=True):
        href = tag['href'].split('#')[0].split('?')[0]
        if not is_local(href):
            continue
        path = os.path.join(DOCS_DIR, href)
        if not os.path.exists(path):
            missing.append(href)

    assert not missing, f"Missing files referenced in {os.path.basename(html_file)}: {missing}"

def test_required_scripts_present():
    required = ["scripts.js", "chatbot.js"]
    for script in required:
        path = os.path.join(DOCS_DIR, script)
        assert os.path.exists(path), f"Required script {script} is missing"
