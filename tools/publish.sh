#!/bin/bash
# Publish to production (only after Hasan approves the preview, see tools/preview.sh):
#   guides  -> Cloudflare Pages project novator-docs      (docs.novatorapps.com)
#   website -> Cloudflare Pages project novatorapps-site  (novatorapps.com)
# Commits and pushes main of novatorapps/novator-docs. Runs on Hasan's Mac (gh and wrangler signed in).
# usage: tools/publish.sh "<commit message>" [site.zip]
set -e
export PATH=/opt/homebrew/bin:/usr/local/bin:$PATH
MSG=${1:-"Update guides"}
ZIP=$2
REPO=~/Code/novator-docs
if [ ! -d $REPO/.git ]; then git clone -q https://github.com/novatorapps/novator-docs.git $REPO; fi
cd $REPO
git fetch -q origin && git checkout -q -B main origin/main 2>/dev/null || git checkout -q -B main
if [ -n "$ZIP" ]; then
  find . -mindepth 1 -maxdepth 1 ! -name .git ! -name node_modules -exec rm -rf {} +
  unzip -q -o "$ZIP"
fi
python3 tools/sync_app.py check
git add -A
if ! git diff --cached --quiet; then
  git -c user.name='Hasan Qureshi' -c user.email=novatorapps@users.noreply.github.com commit -q -m "$MSG"
fi
git push -q -u origin main
npm ci --silent

npm run build --silent
wrangler pages deploy build --project-name=novator-docs --branch=main --commit-message="$MSG" --commit-dirty=true
echo "deployed guides: https://docs.novatorapps.com"

npm run build:site --silent
SITE=$(mktemp -d)
cp -R build-site functions "$SITE"/
sed -e 's/^name = .*/name = "novatorapps-site"/' -e 's/^pages_build_output_dir = .*/pages_build_output_dir = "build-site"/' wrangler.toml > "$SITE/wrangler.toml"
cd "$SITE"
wrangler pages project create novatorapps-site --production-branch=main >/dev/null 2>&1 || true
wrangler pages deploy build-site --project-name=novatorapps-site --branch=main --commit-message="$MSG" --commit-dirty=true
echo "deployed website: https://novatorapps.com"
