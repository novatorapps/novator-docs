#!/bin/bash
# Deploy a PREVIEW of the guides to Cloudflare Pages without touching production.
# Commits to a local "preview" branch only (no push) and deploys to the Pages "preview" branch:
# Guides:   https://preview.novator-docs.pages.dev   (docusaurus.config.js -> docs.novatorapps.com)
# Website:  https://preview.novatorapps-site.pages.dev (site.config.js -> novatorapps.com)
# Both are noindex via static/_headers.
# usage: tools/preview.sh "<commit message>" site.zip
set -e
export PATH=/opt/homebrew/bin:/usr/local/bin:$PATH
MSG=${1:-"Preview"}
ZIP=$2
REPO=~/Code/novator-docs
PROJECT=novator-docs
if [ ! -d $REPO/.git ]; then git clone -q https://github.com/novatorapps/novator-docs.git $REPO; fi
cd $REPO
git fetch -q origin
git checkout -q -B preview origin/main
if [ -n "$ZIP" ]; then
  find . -mindepth 1 -maxdepth 1 ! -name .git ! -name node_modules -exec rm -rf {} +
  unzip -q -o "$ZIP"
fi
python3 tools/sync_app.py check
git add -A
if ! git diff --cached --quiet; then
  git -c user.name='Hasan Qureshi' -c user.email=novatorapps@users.noreply.github.com commit -q -m "$MSG"
fi
npm ci --silent
npm run build --silent
wrangler pages deploy build --project-name=$PROJECT --branch=preview --commit-message="$MSG" --commit-dirty=true
echo "preview: https://preview.$PROJECT.pages.dev"

# Website (novatorapps.com), deployed from its own folder so it gets its own wrangler.toml.
npm run build:site --silent
SITE=$(mktemp -d)
cp -R build-site functions "$SITE"/
sed -e 's/^name = .*/name = "novatorapps-site"/' -e 's/^pages_build_output_dir = .*/pages_build_output_dir = "build-site"/' wrangler.toml > "$SITE/wrangler.toml"
cd "$SITE"
wrangler pages project create novatorapps-site --production-branch=main >/dev/null 2>&1 || true
wrangler pages deploy build-site --project-name=novatorapps-site --branch=preview --commit-message="$MSG" --commit-dirty=true
echo "preview: https://preview.novatorapps-site.pages.dev"
