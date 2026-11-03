#!/usr/bin/env python3
"""Keep the user guides in step with the modules.

    python3 tools/sync.py                  # copy icons and screenshots, write src/data/apps.json, check every guide
    python3 tools/sync.py new <slug>       # start a guide for an app already in apps.json, from templates/guide
    python3 tools/sync.py check            # only check (used in CI: no Odoo sources there)

Screenshots and icons come from <addons>/<module>/static/description/ of the newest series of the app
(ADDONS_ROOT, default /opt/addons<major>). They are copied to static/img/<slug>/ (Pro screenshots get a
"pro-" prefix), so the store page and the guide always show the same, current screens.
"""
import json
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ADDONS_ROOT = os.environ.get('ADDONS_ROOT', '/opt/addons%d')
STORE = 'https://apps.odoo.com/apps/modules/%s/%s'
errors, warnings = [], []


def registry():
    with open(os.path.join(ROOT, 'apps.json')) as f:
        return json.load(f)['apps']


def manifest(path):
    with open(os.path.join(path, '__manifest__.py')) as f:
        return eval(f.read(), {'__builtins__': {}})  # noqa: S307 - our own manifests, plain literals


def module_info(app, key):
    name = app.get(key)
    if not name:
        return None
    series = app['versions'][-1]
    path = os.path.join(ADDONS_ROOT % int(float(series)), name)
    if not os.path.isdir(path):
        errors.append('%s: module %s not found in %s' % (app['slug'], name, path))
        return None
    man = manifest(path)
    return path, {
        'technical': name, 'name': man['name'], 'version': man['version'], 'license': man['license'],
        'price': ('$%d' % man['price']) if man.get('price') else 'Free',
        'store': {v: STORE % (v, name) for v in app['versions']},
    }


def copy_assets(app, key, path):
    dst = os.path.join(ROOT, 'static', 'img', app['slug'])
    os.makedirs(dst, exist_ok=True)
    desc = os.path.join(path, 'static', 'description')
    shutil.copy(os.path.join(desc, 'icon.png'), os.path.join(dst, 'icon-%s.png' % key))
    shots = os.path.join(desc, 'screenshots')
    prefix = 'pro-' if key == 'pro' else ''
    copied = []
    for name in sorted(os.listdir(shots)) if os.path.isdir(shots) else []:
        if name.endswith('.png'):
            shutil.copy(os.path.join(shots, name), os.path.join(dst, prefix + name))
            copied.append(prefix + name)
    return copied


def check_guide(app, shots):
    folder = os.path.join(ROOT, 'docs', app['slug'])
    if not os.path.isdir(folder):
        errors.append('%s: no guide yet (python3 tools/sync.py new %s)' % (app['slug'], app['slug']))
        return
    used = set()
    for root, _dirs, files in os.walk(folder):
        for name in files:
            if not name.endswith(('.md', '.mdx')):
                continue
            text = open(os.path.join(root, name)).read()
            if '{{' in text or 'TODO' in text:
                errors.append('%s/%s: unfinished template text' % (app['slug'], name))
            for img in re.findall(r'/img/%s/([\w.-]+\.png)' % re.escape(app['slug']), text):
                used.add(img)
                if not os.path.exists(os.path.join(ROOT, 'static', 'img', app['slug'], img)):
                    errors.append('%s/%s: missing image %s' % (app['slug'], name, img))
    for shot in shots or []:
        if shot not in used:
            warnings.append('%s: screenshot %s is not used in the guide' % (app['slug'], shot))


def new_guide(slug):
    app = next((a for a in registry() if a['slug'] == slug), None)
    if not app:
        sys.exit('Add %s to apps.json first.' % slug)
    folder = os.path.join(ROOT, 'docs', slug)
    if os.path.exists(folder):
        sys.exit('docs/%s already exists.' % slug)
    shutil.copytree(os.path.join(ROOT, 'templates', 'guide'), folder)
    values = {'{{TITLE}}': app['title'], '{{SLUG}}': slug, '{{FREE}}': app.get('free') or '',
              '{{PRO}}': app.get('pro') or '', '{{SUMMARY}}': app['summary'],
              '{{VERSIONS}}': ', '.join('Odoo %s' % v for v in app['versions'])}
    for root, _dirs, files in os.walk(folder):
        for name in files:
            p = os.path.join(root, name)
            text = open(p).read()
            for k, v in values.items():
                text = text.replace(k, v)
            open(p, 'w').write(text)
    if not app.get('pro'):
        os.remove(os.path.join(folder, 'pro.md'))
    print('Started docs/%s. Replace every TODO, then run tools/sync.py.' % slug)


def main():
    if len(sys.argv) > 2 and sys.argv[1] == 'new':
        return new_guide(sys.argv[2])
    only_check = len(sys.argv) > 1 and sys.argv[1] == 'check'
    data = []
    for app in registry():
        entry = {k: app[k] for k in ('slug', 'title', 'summary', 'versions')}
        shots = []
        if not only_check:
            for key in ('free', 'pro'):
                found = module_info(app, key)
                if found:
                    path, info = found
                    entry[key] = info
                    shots += copy_assets(app, key, path)
            data.append(entry)
        check_guide(app, shots if not only_check else None)
    if not only_check:
        os.makedirs(os.path.join(ROOT, 'src', 'data'), exist_ok=True)
        with open(os.path.join(ROOT, 'src', 'data', 'apps.json'), 'w') as f:
            json.dump(data, f, indent=2)
    for w in warnings:
        print('warning:', w)
    for e in errors:
        print('ERROR:', e)
    print('%d app(s), %d error(s), %d warning(s)' % (len(registry()), len(errors), len(warnings)))
    sys.exit(1 if errors else 0)


if __name__ == '__main__':
    main()
