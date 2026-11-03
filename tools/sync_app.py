#!/usr/bin/env python3
"""Keep the user guides in step with the apps.

usage:
  sync_app.py new <slug>                    create docs/<slug>/ from templates/guide (entry must exist in apps.json)
  sync_app.py images <slug> <addons_dir>    copy icon and store screenshots of the app's modules from
                                            <addons_dir>/<module>/static/description into static/img/<slug>/
  sync_app.py check                         write src/data/apps.json and fail on missing guides, images or TODOs

Screenshots are the same real screens used on the Apps Store pages (Northwind demo, 1440x810),
so every release refreshes both with one command.
"""
import ast
import json
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG = os.path.join(ROOT, 'apps.json')
STORE = 'https://apps.odoo.com/apps/modules/%s/%s'


def load():
    with open(CATALOG, encoding='utf-8') as f:
        return json.load(f)


def app_entry(slug):
    for index, app in enumerate(load()['apps']):
        if app['slug'] == slug:
            return index, app
    raise SystemExit('unknown app %s: add it to apps.json first' % slug)


def last_series(app):
    return app['versions'].split('-')[-1].strip()


def store_url(app, module):
    return STORE % (last_series(app), module) if module else ''


def cmd_new(slug):
    index, app = app_entry(slug)
    dst = os.path.join(ROOT, 'docs', slug)
    if os.path.exists(dst):
        raise SystemExit('docs/%s already exists' % slug)
    values = dict(app, position=index + 2, store_free=store_url(app, app.get('free')),
                  store_pro=store_url(app, app.get('pro')), free=app.get('free') or '', pro=app.get('pro') or '',
                  price=app.get('price') or 'free')
    os.makedirs(dst)
    src = os.path.join(ROOT, 'templates', 'guide')
    for name in sorted(os.listdir(src)):
        with open(os.path.join(src, name), encoding='utf-8') as f:
            text = f.read()
        for key, value in values.items():
            text = text.replace('{{%s}}' % key, str(value))
        with open(os.path.join(dst, name), 'w', encoding='utf-8') as f:
            f.write(text)
    print('created docs/%s: replace every TODO, then run images and check' % slug)


def cmd_images(slug, addons):
    _index, app = app_entry(slug)
    dst = os.path.join(ROOT, 'static', 'img', slug)
    os.makedirs(dst, exist_ok=True)
    seen = {}
    for kind in ('free', 'pro'):
        module = app.get(kind)
        if not module:
            continue
        desc = os.path.join(addons, module, 'static', 'description')
        if not os.path.isdir(desc):
            raise SystemExit('%s not found in %s' % (module, addons))
        icon = os.path.join(desc, 'icon.png')
        if os.path.exists(icon):
            shutil.copy(icon, os.path.join(dst, 'icon.png' if kind == 'free' or not app.get('free') else 'icon_pro.png'))
        shots = os.path.join(desc, 'screenshots')
        for name in sorted(os.listdir(shots)) if os.path.isdir(shots) else []:
            if not name.endswith('.png'):
                continue
            target = name if name not in seen else 'pro_' + name
            seen[target] = module
            shutil.copy(os.path.join(shots, name), os.path.join(dst, target))
        manifest = os.path.join(addons, module, '__manifest__.py')
        with open(manifest, encoding='utf-8') as f:
            version = ast.literal_eval(f.read()).get('version')
        print('%s %s' % (module, version))
    print('%d screenshots in static/img/%s' % (len(seen), slug))


def cmd_check():
    data = load()
    problems = []
    out = []
    for app in data['apps']:
        slug = app['slug']
        icon = os.path.join(ROOT, 'static', 'img', slug, 'icon.png')
        entry = dict(app, store=store_url(app, app.get('pro') or app.get('free')),
                     icon='img/%s/icon.png' % slug if os.path.exists(icon) else None)
        out.append(entry)
        folder = os.path.join(ROOT, 'docs', slug)
        if app.get('guide'):
            if not os.path.isdir(folder):
                problems.append('%s: guide is true but docs/%s is missing' % (slug, slug))
            if not entry['icon']:
                problems.append('%s: no icon (run images)' % slug)
        if os.path.isdir(folder):
            for name in os.listdir(folder):
                if not name.endswith(('.md', '.mdx')):
                    continue
                with open(os.path.join(folder, name), encoding='utf-8') as f:
                    text = f.read()
                if app.get('guide') and 'TODO' in text:
                    problems.append('docs/%s/%s: TODO left' % (slug, name))
                for img in re.findall(r'\(/img/([^)\s]+)\)|src="/img/([^"]+)"', text):
                    path = img[0] or img[1]
                    if not os.path.exists(os.path.join(ROOT, 'static', 'img', path)):
                        problems.append('docs/%s/%s: missing image %s' % (slug, name, path))
    os.makedirs(os.path.join(ROOT, 'src', 'data'), exist_ok=True)
    with open(os.path.join(ROOT, 'src', 'data', 'apps.json'), 'w', encoding='utf-8') as f:
        json.dump({'apps': out}, f, indent=2)
    if problems:
        print('\n'.join(problems))
        raise SystemExit(1)
    print('ok: %d apps, %d guides' % (len(out), sum(1 for a in out if a.get('guide'))))


if __name__ == '__main__':
    args = sys.argv[1:]
    if args[:1] == ['new'] and len(args) == 2:
        cmd_new(args[1])
    elif args[:1] == ['images'] and len(args) == 3:
        cmd_images(args[1], args[2])
    elif args[:1] == ['check']:
        cmd_check()
    else:
        raise SystemExit(__doc__)
