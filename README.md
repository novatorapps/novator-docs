# Novator User Guides

Source of https://docs.novator.co: one guide per Novator app for Odoo, with screenshots.

## How a guide is made

1. Add the app to `apps.json` (slug, title, one-line summary, free and Pro technical names, Odoo versions).
2. `python3 tools/sync.py new <slug>` copies `templates/guide/` to `docs/<slug>/`.
3. `python3 tools/sync.py` copies the icons and store screenshots of the newest Odoo series into
   `static/img/<slug>/` (Pro screenshots get a `pro-` prefix), writes `src/data/apps.json` for the home page,
   and checks every guide: no TODO left, every image exists, every screenshot is used.
4. Write the pages (overview, install and set up, features, Pro features, FAQ). Use the menu and field names
   exactly as they appear in Odoo.
5. `npm run build` fails on any broken link or image.
6. Publish with `push_docs.sh` (builds are pushed to the `gh-pages` branch, served by GitHub Pages at
   docs.novator.co).

Every module release runs steps 3 to 6, so the guide always shows the same screens as the store page.

## Local preview

    npm install
    npm start
