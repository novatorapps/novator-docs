# Novator user guides

Source of https://docs.novator.co: one guide per Novator app for Odoo, built with Docusaurus and hosted on Cloudflare Pages.

## Every release

1. New app: add it to `apps.json`, then `python3 tools/sync_app.py new <slug>` and replace every TODO.
2. Copy the store screenshots and icon: `python3 tools/sync_app.py images <slug> /opt/addons20` (same screens as the Apps Store page).
3. Update the pages for what changed, set `"guide": true` in `apps.json`.
4. `python3 tools/sync_app.py check` (no TODOs, no missing images), `npm run build` (no broken links).
5. Publish from the Mac: `tools/publish.sh "<message>" <site.zip>` commits to GitHub and deploys to Cloudflare Pages.

## Layout

- `docs/getting-started/`: installing apps in general.
- `docs/<slug>/`: one folder per app: `index.md` (overview, free vs Pro), `setup.md`, `features.md`, `pro.md`, `faq.md`.
- `static/img/<slug>/`: icon and screenshots (copied by the sync tool, do not edit by hand).
- `templates/guide/`: the starting point for a new guide.
- `apps.json`: the catalog shown on the home page.

Local preview: `npm install && npm start`.
